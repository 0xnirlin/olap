import { doc, setDoc } from 'firebase/firestore'
import { useFormik } from 'formik'
import { useSession } from 'next-auth/react'
import React from 'react'
import { db } from '../pages/app/firebase'

const EditModal = ({colors}) => {
  const { data: session, status } = useSession();
  console.log(session)
  // const reference = collection(db, "Board");
  // const colors = {
  //   green: "#BBF7D0",
  //   blue: "#67E8F9",
  //   purple: "#DDD6FE",
  //   pink: "#FBCFE8",
  //   red: "#FECACA",
  //   lime: "#D9F99D",
  //   orange: "#FED7AA",
  //   yellow: "#FDE68A",
  // };

  const formik = useFormik({
    initialValues:{
      Title: "",
      Tags:"",
      Description:"",

    },
    onSubmit: (values) => 
    {
      let tags = values.Tags.split(",")
      let colorKeys = Object.keys(colors)
      let tagColor = []
      tags.forEach((tag) => 
      {
        let tagObj = {[tag] : colorKeys[Math.floor(Math.random() * 8)]}
        tagColor.push(tagObj)
      })
      
      tags = tagColor
      console.log("Tags: ",tags)
      const docData = {
          'tags':tags,
          'title':values.Title,
          'discription':values.Description,
          'status':'doing',
          'uuid':session.accessToken.sub
      }
      const ref = doc(db,"Boards",values.Title )
      setDoc(ref,docData)
      values.Description = ""
      values.Tags = ""
      values.Title = ""
    


      // console.log(values)
    }
  })
  return (
    <div className='flex w-screen h-screen absolute left-0 top-0 bg-slate-900 bg-opacity-70 z-[100] items-center justify-center transition-all duration-1000'>
        <div className='flex w-[40%] h-[70%] bg-white rounded-lg'>
          <form onSubmit={formik.handleSubmit}>
            <input 
            id='Title'
            name='Title'
            type={'text'}
            placeholder="Title"
            onChange={formik.handleChange}
            value = {formik.values.Title}
            ></input>
            <input
                  id='Tags'
                  name='Tags'
                  type={'text'}
                  placeholder="Tags"
                  onChange={formik.handleChange}
                  value = {formik.values.Tags}
            ></input>
            <input
                  id='Description'
                  name='Description'
                  type={'text'}
                  placeholder="Description"
                  onChange={formik.handleChange}
                  value = {formik.values.Description}
            ></input>
            <button type='submit'>Submit</button>
          </form>

        </div>
    </div>
  )
}

export default EditModal

//so import ethers
//get the provide