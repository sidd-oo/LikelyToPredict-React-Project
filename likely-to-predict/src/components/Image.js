import React, {useState} from "react";

export const Image = (props) => {

    const [Images, setImages] = useState(["https://images.unsplash.com/photo-1612288528103-edc64749d4ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1598333286614-13d8b1767be0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1598185092528-a88552ff8040?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1553460982-e4d8b24bfdd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                ])
    const [newImageURL, setNewImageURL] = useState("")


  function handleRemove(index) {
    console.log("clicking");
    setImages(Images.filter((image,ind) => ind !== index));

  }

  function ShowImage(){
    return (
        
        Images.map((image, index) => {
          return (
            <div className="w-1/4 my-4 flex justify-center" key={index}>
              <img
                onClick={()=>handleRemove(index)}
                src={image}
                width="200"
                height="150"
                alt=""
              />
            </div>
          );
        })
      );
  }

  const handleAdd = () => {
      if(newImageURL !== ""){
          setImages([...Images, newImageURL]);    
          setNewImageURL("")
      }
  }

  const handleChange = (event)=>{   
      setNewImageURL(event.target.value);

  }

  return (
    <div className = "justify-center">
      <div className="flex flex-wrap justify-center ">
        <ShowImage />
      </div>

      <div className="flex justify-center my-5 w-full">
        <div className="w-full">
          <input
            type="text"
            onChange={handleChange}
            value={newImageURL}
            className="p-2 border border-gray-800 shadow rounded w-full"
          />
        </div>

        <div className = "">
          <button
            disabled={newImageURL === ""}
            className={`p-2 w-40 rounded text-white ml-2 ${
              newImageURL !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}
          >
             Add Image
          </button>
        </div>
      </div>
    </div>
  );
};
