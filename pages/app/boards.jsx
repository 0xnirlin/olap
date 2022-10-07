import { collection, deleteDoc, doc, query, where } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import PageNav from "../../components/PageNav";
import Board from "../../components/Board";
import Modal from "../../components/Modal";
import EditModal from "../../components/EditModal";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { db } from "./firebase";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";


const boards = (props) => {
  const { data: session, status } = useSession();

  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [id, setID] = useState(0);
  const colRef = collection(db, "Boards");
  const reference = collection(db, "Board");
  const colors = {
    green: "#BBF7D0",
    blue: "#67E8F9",
    purple: "#DDD6FE",
    pink: "#FBCFE8",
    red: "#FECACA",
    lime: "#D9F99D",
    orange: "#FED7AA",
    yellow: "#FDE68A",
  };

  let q
  
  if(session)
  {
    console.log("Query Session: ",session.accessToken.sub)
     q = query(colRef,where("uuid", "==", session.accessToken.sub));
  }
  else
  {
     q = query(reference)
  }
  const [items, loading, error] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  
  console.log("Items: ",items)

  const deleteHandler = async (id) => {
    await deleteDoc(doc(db, "Boards", id));
  };
  useEffect(() => {}, [status, session]);

  if (status == "unauthenticated") {
    return (
      <div>
        <p>FUCK OFF UNAUthenticaTED piece of shIT</p>
        <button className="flex rounded-sm bg-red-500   items-center justify-center hover:cursor-pointer  w-fit  absolute top-6 right-8 px-4 py-2 h-fit font-medium  transition-all text-slate-50 hover:opacity-90 z-50 ">
          Add Board
        </button>
      </div>
    );
  }

  if (status === "loading") {
    return <p>Loading....</p>;
  } else if (status == "authenticated") {
    return (
      <div className="w-full h-screen overflow-scroll">
        {editModal && (
          <EditModal colors={colors}></EditModal>
        )}

        {modal && (
          <Modal
            setModal={setModal}
            id={id}
            deleteHandler={deleteHandler}
          ></Modal>
        )}
        <PageNav title={"Boards"}></PageNav>
        <div className="w-full p-3  flex flex-row flex-wrap  justify-start   ">
          {(items ? items.docs : props.data).map((item, index) => (
            <Board
              key={index}
              item={items ? item.data() : item}
              id={items ? item.id : null}
              setModal={setModal}
              modal={modal}
              setID={setID}
              colors={colors}
            ></Board>
          ))}
          <button
            className="flex rounded-sm bg-red-500   items-center justify-center hover:cursor-pointer  w-fit  absolute top-6 right-8 px-4 py-2 h-fit font-medium  transition-all text-slate-50 hover:opacity-90 z-50 "
            onClick={() => setEditModal(true)}
          >
            Add Board
          </button>
        </div>
      </div>
    );
  }
};

export default boards;

export async function getServerSideProps(context) {
  
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  console.log(session)

  const {
    initializeApp,
    applicationDefault,
    cert,
    getApps,
  } = require("firebase-admin/app");
  const {
    getFirestore,
    Timestamp,
    FieldValue,
  } = require("firebase-admin/firestore");
  const serviceAccount = require("../../Utils/firebase-config.json");

  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  const db = getFirestore();
  let data = []
  if(session)
  {

    const boardDocs = await db.collection("Boards").where('uuid' ,'==', session.accessToken.sub).get();
     data = [];
  
    boardDocs.forEach((doc) => {
      data.push({
        title: doc.data().title ? doc.data().title : null,
        uuid: doc.data().uuid ? doc.data().uuid : null,
        createdAt: doc.data().createdAt
          ? doc.data().createdAt.toDate().toDateString()
          : null,
        status: doc.data().status ? doc.data().status : null,
        tags: doc.data().tags ? doc.data().tags : null,
      });
    });
  }
 

  return {
    props: { data }, // will be passed to the page component as props
  };
}
