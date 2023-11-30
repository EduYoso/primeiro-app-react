import React from "react";
import "./App.css";

function App() {
  const catImages = [
    {
      imageURL:
        "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
      caption: "Adorable Orange Cat",
    },
    {
      imageURL:
        "https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg",
      caption: "Stylish Sunglasses Cat",
    },
    {
      imageURL:
        "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148",
      caption: "Shark Cat",
    },
  ];

  const catLists = [
    {
      listName: "Things cats love:",
      listItens: ["cat nip", "laser pointers", "lasagna"],
      listType: "ul", // unordered list
      listImage:
        "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg",
      listImageAlt: "A slice of lasagna on a plate.",
      listImageCaption: "Cats <em>love</em> lasagna.", // <em> is an element that enphasizes its contents (italic)
    },
    {
      listName: "Top 3 things cats hate",
      listItens: ["flea treatment", "thunder", "other cats"],
      listType: "ol", // ordered list
      listImage:
        "https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg",
      listImageAlt: "Five cats looking around a field.",
      listImageCaption: "Cats <strong>hate</strong> other cats.", // <strong> is an element that enphasizes its contents (bold)
    },
  ];

  const catForms = [
    {
      formLegend: "Is your cat an indoor or outdoor cat?",
      formLabels: ["Indoor", "Outdoor"],
      formType: "radio", // radio is a form type that only allows the user to select one label
    },
    {
      formLegend: "What's your cat's personality?",
      formLabels: ["Loving", "Lazy", "Energetic"],
      formType: "checkbox", // checkbox is form type that allows the user to select as many labels as they want
    },
  ];

  // Function that generates images from catImages
  const catImagesElements = catImages.map((catImage) => {
    return (
      <a href="https://freecatphotoapp.com">
        <img
          className="frontImages"
          src={catImage.imageURL}
          alt={catImage.caption}
        />
      </a>
    );
  });

  //Function that generates cat lists from catLists
  const catListsElements = catLists.map((catList) => {
    return (
      <>
        <h3>{catList.listName}</h3>
        <catList.listType>
          {catList.listItens.map((item) => {
            return <li>{item}</li>;
          })}
        </catList.listType>

        <img src={catList.listImage} alt={catList.listImageAlt} />
        <figcaption
          dangerouslySetInnerHTML={{ __html: catList.listImageCaption }}
        ></figcaption>
      </>
    );
  });

  //Function that generates car forms from catForms
  const catFormsElements = catForms.map((catForm) => {
    return (
      <>
        <fieldset>
          <legend>{catForm.formLegend}</legend>
          {catForm.formLabels.map((formLabel) => {
            return (
              <label>
                <input
                  name={catForm.formLegend}
                  className="formsInputs"
                  type={catForm.formType}
                />
                {formLabel}
              </label>
            );
          })}
        </fieldset>
      </>
    );
  });

  return (
    <body>
      <main>
        <h1>Cat Photo App</h1>
        <section>
          <h2>Cat Photos</h2>
          <p>
            See more{" "}
            <a href="https://www.google.com" target="blank">
              cat photos
            </a>{" "}
            in our gallery.
          </p>
          {catImagesElements}
        </section>
        <section>
          <h2>Cat Lists</h2>
          {catListsElements}
        </section>
        <section>
          <h2>Cat Form</h2>
          <form action="https://freecatphotoapp.com/submit-cat-photo">
            {catFormsElements}
            <input
              type="text"
              name="catphotourl"
              placeholder="cat photo URL"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        No Copyright -{" "}
        <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
      </footer>
    </body>
  );
}

export default App;
