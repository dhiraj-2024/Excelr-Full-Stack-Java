import React, { useState } from 'react'

export const AddRecipesForm = () => {

    const [formData, setFormData] = useState({
        title: " ",
        // ingredient: " ",
        // servings: 1,
        // chef: " "
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChnage = (e) => {
        const { name, value } = e.target;

        setFormData(prevdata => ({

            ...prevdata,
            [name]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newPayload =  {
            title: formData.title
        }

        console.log("submit data : ", newPayload)


    }
    
   



  return (
      <>
          <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title :</label>
            
              <input
                  type="text"
                  name="title"
                  id='title'
                  value={formData.title}
                  onChange={handleChnage}
                  placeholder='Enter your recipe name '
              />
              <button>submit</button>

      </form>
      </>
  )
}
