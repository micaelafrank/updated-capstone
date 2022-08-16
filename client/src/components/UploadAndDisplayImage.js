import React, { useState } from "react";

const UploadAndDisplayImage = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    function displayUploadedImage() {
        if (selectedImages[0]) {
            return selectedImages.map((image, index) => {
                return (
                    <div key={index}>
                        <img
                            alt="not found"
                            width={"250px"}
                            src={URL.createObjectURL(image)}
                        />
                        <br />
                        <button
                            onClick={() =>
                                setSelectedImages((selectedImages) => {
                                    return selectedImages.filter((_, i) => i !== index);
                                })
                            }
                        >
                            Remove
                        </button>
                    </div>
                );
            });
        } else {
            return null;
        }
    }

    function handlePhotoSubmit() {
        const formData = new FormData();

        selectedImages.forEach((image, index) =>
            formData.append(`images[]`, image)
        );

        for (const value of formData.values()) {
            console.log(value);
        }

        fetch("/user-image", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.log({ error: error }));
    }

    return (
        <div>
            <h1>Upload and Display Image</h1>
            {displayUploadedImage()}
            <br />
            <br />
            <input
                type="file"
                name="myImage"
                multiple
                onChange={(event) => {
                    console.log(event.target.files);
                    setSelectedImages(Array.from(event.target.files));
                    console.log(Array.from(event.target.files));
                }}
            />
            <br />
            <br />
            <button onClick={handlePhotoSubmit}>Submit</button>
        </div>
    );
};

export default UploadAndDisplayImage;