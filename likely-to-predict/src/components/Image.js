import React from "react";

export const Image = (props) => {

    const Images = ["https://images.unsplash.com/photo-1612288528103-edc64749d4ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1598333286614-13d8b1767be0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1598185092528-a88552ff8040?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    "https://images.unsplash.com/photo-1553460982-e4d8b24bfdd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                ];

  function ShowImage(){
    return (
        Images.map((image) => {
          return (
            <div>
              <img key={image} src={image} width="200" height="150" alt="" />
            </div>
          );
        })
      );
  }
  return (
    <div className ="flex justify-center">
      <ShowImage/>
    </div>
  );
};
