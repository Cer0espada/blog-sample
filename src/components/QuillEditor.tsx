import React,{useState, useRef, useEffect, useCallback, Ref} from 'react';
import {CreateAuthor, CreateBlogPost, UploadImage} from './Controller';
import ReactQuill from 'react-quill';
import "quill/dist/quill.snow.css"

// const createIndex = (words) => {

//     words = () => words.trim().split(" ");
//     let listIndex = []
//     for (let i = 0; i < words.length; i++) {
//         for (let y = 1; y < words[i].length; y++) {
//             listIndex.push(words[i].substr(0, y + 1).toLowerCase())
//         }
//     }

//     return listIndex
// }

const QuillEditor = () => {
    const quillRef = useRef<React.LegacyRef<HTMLDivElement>>();

    const [quillInfo, setQuillInfo] = useState<any>()

    const [category, setCategory] = useState<string >();
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [imageCaption, setImageCaption] = useState<string>();
    const [mainImg, setMainImg] = useState<File >();
    const [mainImgName, setMainImgName] = useState<string >();
    const [mainImgPreview, setMainImgPreview] = useState<string>();
    const [authorImg, setAuthorImg] = useState<string>();
    const [authorImgPreview, setAuthorImgPreview] = useState<string>();
    const [authorImgName, setAuthorImgName] = useState<string>();
    const [quill, setQuill] = useState<Quill >()
    const [authorName, setAuthorName] = useState<string>()



    const wrapperRef: React.LegacyRef<HTMLDivElement> = useCallback((wrapper:React.LegacyRef<HTMLDivElement> |any) => {
        if(wrapper == null) return
        wrapper.innerHTML = '';
        const editor = document.createElement('div')
      
        wrapper.append(editor)
        const quillEditorInstance =new Quill(editor, {theme:"snow"})
           setQuill((quillEditorInstance as any));
    }, [])

    // const quillDelta = useCallback((value, delta, source, editor ) => {
    //     setQuillInfo({value: value, delta: delta, value: value })
    // },[])

    useEffect(() => {

        if(quill == null || quill == undefined) return ;

    
        quill.on('text-change', (delta, oldDelta, source) => {
            // console.log(quill.getContents())
            // setQuillInfo(quill.getContents())
            quillInfo(delta)
        })

        return() => {
            quill.off('text-change', (delta, oldDelta, source) => {
                console.log(delta + 'off')
            })
        }
        
    })
    const handleMainUploadImage = (event:Event |any) => {
        setMainImg(event.target.files[0])
        setMainImgPreview(URL.createObjectURL(event.target.files[0]))
        setMainImgName(event.target.files[0].name)
        // console.log(imageName)

    }

    const handleAuthorUploadImage = (event: Event | any) => {
        setAuthorImg(event.target.files[0])
        setAuthorImgPreview(URL.createObjectURL(event.target.files[0]))
        setAuthorImgName(event.target.files[0].name)
        // console.log(imageName)

    }

    const handleSubmit = async (event:Event |any) =>{
        event.preventDefault()
        let authorSource:Promise<string> = UploadImage(mainImg as File, mainImgName as string, '/authors/images/');

        let mainImgSource:Promise<string> = UploadImage(mainImg as File, mainImgName as string, '/blog-posts/images/');
        
        await Promise.all([mainImgSource, authorSource])

        let authorId = await CreateAuthor(authorName as string, await authorSource)

        CreateBlogPost(quillInfo, authorName as string, authorId, await authorSource, category as string, description as string, title as string, imageCaption as string, await mainImgSource)

    }
 

    return(
        <div className="quill-editor">
            <div className="quill-editor-container">
                <form className="quill-editor-container__form"action="">
                    <label htmlFor=""> Who is the author?</label>
                    <select
                    name="author" 
                    id=""
                    onChange={(event) => setAuthorName(event.target.value)}
                    >
                        <option value="Layla Lombardi">Layla Lombardi</option>
                    </select>
                    <label htmlFor="">What category is this blog for ?</label>
                    <select
                        onChange={(event) => setCategory(event.target.value)}
                        name="categoryPicker" id="category-picker">
                        <option value="Financial Literacy">Financial Literacy</option>
                        <option value="Black Female Excellence">Black Female Excellence</option>
                        <option value="Happening Now">Happening Now</option>
                        <option value="Education">Education</option>
                        <option value="Prosparity">Prosparity</option>
                    </select>
                    <label htmlFor=""> What is the title of the Post ?</label>
                <input
                    onChange={(event) => setTitle(event.target.value)}
                    name="Title" type="text" placeholder="Some Fancy Blog Title" />
                {/* <p className="error-is-present">Something went wrong here   </p> */}
                <label htmlFor=""> What is the description of your Post ?</label>
                <input
                    onChange={(event) => setDescription(event.target.value)}
                    name="description" type="text" placeholder="Some Fancy Blog Description" />
                {/* <label htmlFor=""> What tags should we apply to this ?</label> */}
                <label htmlFor="">Please input the main image caption into the form</label>
                <input
                    onChange={(event) => setImageCaption(event.target.value)}
                    name="mainImagecaption" type="text" />
               
                <label htmlFor="">Select the image that you would like to use as a thumbnail for the main blog page, you can insert other images through the editor</label>
                <input
                    onChange={(event) => handleMainUploadImage(event)}
                    name="mainImage" type="file" accept="image/png, image/jpeg, image/gif" />
                    {mainImg && <img src={mainImgPreview} alt="uploaded pic" className="quill-editor-container__form--main-image-preview" />}
                <label htmlFor="">Select the image that you would like to use as a thumbnail for the your profile page in the document</label>
                <input
                    onChange={(event) => handleAuthorUploadImage(event)}
                    name="authorImage" type="file" accept="image/png, image/jpeg, image/gif" />
                {
                    authorImg && <img src={authorImgPreview} alt="uploaded pic" className="quill-editor-container__form--author-image-preview" />
                }
                </form>
                <div ref={wrapperRef} 
                className="quill-editor-container__quill"
                ></div>

                <button onClick={(event) => handleSubmit(event)} className={"quill-editor-container__button"}>Submit</button>
            </div>
        </div>

    )
}

export default QuillEditor;