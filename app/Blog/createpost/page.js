'use client'
import React from 'react'
import { useState } from 'react'
import { storage, firestore } from '@/firebase/firebase.config'
import { 
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  FormHelperText,
  Textarea,
} from '@chakra-ui/react'

export default function Page () {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [percent, setPercent] = useState(0);
  const [fileUrl, setFileUrl] = useState('');

  const [title, setTitle] = useState('')
  const [tagline, setTagline] = useState('')
  const [author, setAuthor] = useState('')
  const date = new Date().toISOString().split('T')[0]

  const [content, setContent] = useState('')


  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  function handleUpload(e) {
    e.preventDefault();
    if (!file) {
        alert("Please choose a file first!")
    }
    const storageRef = ref(storage, `/postsimage/${file.name}`)
    setUploading(true);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
          const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
      },
      (err) => console.log(err),
      () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              console.log(url);
              setFileUrl(url);
              setUploading(false);
          });
      }
  ); 
}

  function handleUploadPost (e) {
    setIsLoading(true);
    e.preventDefault();
    if (!fileUrl) {
        alert("Please choose a file first!")
    }
    firestore.collection('blogPosts').add({
      title: title,
      tagline: tagline,
      content: content,
      date: date,
      author: author,
      imageUrl: fileUrl,
      
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      resetForm();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    setIsLoading(false);
    resetForm();
  }

  const resetForm = () => {
    setTitle('');
    setTagline('');
    setAuthor('');
    setContent('');
    setFileUrl('');
    setFile(null);
    setPercent(0);
    
    
  }
  

  return (
    <main className='w-screen h-auto flex-row flex justify-center items-center'>
      <section className='flex flex-col h-fit gap-6 items-center justify-evenly my-12'>
        <FormControl id="file" >
          <FormLabel>File</FormLabel>
          <Input colorScheme='teal' type="file" onChange={handleChange} />
          {uploading ? (
              <FormHelperText>{`Uploading: ${percent}% done`}</FormHelperText>
            ) : (
              <FormHelperText>Upload a file</FormHelperText>
            )}
          <Button variant='outline' colorScheme='teal' disabled={uploading} onClick={handleUpload}>Upload to Firebase</Button>
        </FormControl>
        <FormControl id="post" className='gap-4'>
          <FormLabel>Blog Post</FormLabel>

          <FormHelperText>write your title</FormHelperText>
          <Input colorScheme='teal' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

          <FormHelperText>Write your tagline</FormHelperText>
          <Input colorScheme='teal' type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />
          
          <FormHelperText>{`Author's Name`}</FormHelperText>
          <Input colorScheme='teal' type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

          {/* <FormHelperText>Today's Date</FormHelperText>
          <Input colorScheme='teal' type="text" /> */}

          <FormHelperText>Post Content</FormHelperText>
          <Textarea colorScheme='teal' type="text" value={content} onChange={(e) => setContent(e.target.value)} />

        </FormControl>
        <Button variant='outline' colorScheme='teal' onClick={handleUploadPost} disabled={uploading || isLoading}>Post</Button>
      </section>
    </main>
  )
}

