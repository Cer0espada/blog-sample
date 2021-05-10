import React, {useMemo, useCallback} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import firebase, {storage, db} from '../firebaseApp';

export const UploadImage = async (image:File, imageName:string, reference:string) => {
    //returns if no image is present
    if (!imageName) console.error('No image Uploaded')

    //sets image if it is not present and create the path in the storage ref
    var storageRef = storage.ref(reference + imageName);
    await storageRef.put(image)

    return Promise.resolve(storageRef.getDownloadURL())
    //set the image Url state in the form modifying page 

}

export const CreateAuthor = async (name:string, imgPath:string) => {

    //handle existing entry 
    const existingRef = await (db.collection('authors').where('name', "==", name)).get();

    if (!existingRef.empty) {
        new Error('Author already exists')
        console.error('Author already exists')
        console.log(existingRef.docs[0].id)
        return existingRef.docs[0].id
    };


    const uuid = uuidv4()
    // const id = uuid
    // const newDoc = db.collection('authors').doc()
    // const newDocId = newDoc.id

    db.collection('authors').doc(uuid).set({
        name:name,
        created_At: firebase.firestore.FieldValue.serverTimestamp(),
        imgPath: imgPath,
        uuid: uuid
    })
        .catch((error) => console.log("Error adding document", error))


    return uuid

};

export const CreateBlogPost = async (html: string, author:string, authorid:string, authorImg: string , blogCategory:string, description:string, title:string, imgCaption:string, imgPath:string) => {

  
    const getFullMonthDateTimeStamp = (date:Date) => {

        const splittedDateTime = date.toString().split(" ")

        return `${splittedDateTime[1]} ${splittedDateTime[2]}, ${splittedDateTime[3]}`
    }

    const createIndex = (words:string) => {

        let newWords:string[] = words.trim().split(" ")
        let listIndex = []
        for (let i = 0; i < newWords.length; i++) {
            for (let y = 1; y < newWords[i].length; y++) {
                listIndex.push(newWords[i].substr(0, y + 1).toLowerCase())
            }
        }

        return listIndex
    }

    //handle existing entry 
    const existingRef = (await db.collection('posts').where("title", "==", title).get());

    if (!existingRef) {
        new Error('Blog Post already exists')
        console.error('Blog Post already exists')
        return
    };

    // const newDoc = db.collection('posts').doc();
    // const newDocId = newDoc.id
    const uuid = uuidv4()

    db.collection('posts').doc(uuid).set({
        HTMLtext: html,
        author: author,
        authorid: authorid,
        authorImg: authorImg,
        blogCategory: blogCategory,
        blogCategoryURL: blogCategory.toLowerCase().split(" ").join("-"),
        description: description,
        title: title,
        created_At: new Date(),
        formattedDate: getFullMonthDateTimeStamp(new Date()),
        imgPath: imgPath,
        imgCaption: imgCaption,
        titleLower: title.toLowerCase(),
        titleLink: title.toLowerCase().split(" ").join("-"),
        titleSearchIndex: createIndex(title),
        descSearchIndex: createIndex(title),
        uuid: uuid
    })
        .catch((error) => console.log("Error adding BlogPost", error))


    return uuid
    // await Promise.all([query, query.id])
}

export const MainSearch = async (query: any, stateChange: any) => {
    let results: Object[] = []
    db
        .collection('posts')
        .where("title", ">=", query)
        .where("title", "<", `${query}+z`)
        .onSnapshot((querySnapshot) => {

            querySnapshot.forEach((doc) => results.push(doc));
            console.log(results)
        })
    stateChange(results)
    return results

}