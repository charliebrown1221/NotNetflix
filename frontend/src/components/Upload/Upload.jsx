import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import S3 from 'react-aws-s3'
import AWS from 'aws-sdk'
window.Buffer = window.Buffer || require("buffer").Buffer;



// const Upload= () => {
//     const S3_BUCKET ='notnetflix2';
//     const REGION ='us-east-1';
//     const ACCESS_KEY ='AKIAUR5WLJJHJ6ECFERO';
//     const SECRET_ACCESS_KEY ='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';
    
//     const config = {
//         bucketName: S3_BUCKET,
   
//         accessKeyId: ACCESS_KEY,
//         secretAccessKey: SECRET_ACCESS_KEY,
//         s3Url:'https://notnetflix2.s3.us-east-1.amazonaws.com/'
//     }

//     const ReactS3Client = new S3(config)

//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
  
//     }

//     const handleUpload = async () => {
//         console.log(selectedFile)
//         ReactS3Client.uploadFile(selectedFile, "test")
//             .then(data => console.log(data))
//             .catch(err => console.error(err))
//     }

//     return <div>
//         <div>React S3 File Upload</div>
//         <input type="file" onChange={handleFileInput}/>
//         <button onClick={() => handleUpload()}> Upload </button>
//     </div>
// }

// export default Upload;
const S3_BUCKET ='notnetflix2';
const REGION ='us-east-1';


AWS.config.update({
    accessKeyId: 'AKIAUR5WLJJHJ6ECFERO',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const Upload = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }


    return <div>
        <div>File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}> Upload </button>
    </div>
}

export default Upload;