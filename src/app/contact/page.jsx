import Image from "next/image";
const Contact = () => {
  return (
    <>
      {" "}
      <main>
        <section className="flex-auto">
          {/*</main>className="flex lg:hidden"*/}

          <div className="">
            <h1
              className="text-center uppercase "
              id="tittle-font"
            >
              contactez-nous
            </h1>
          </div>
          <div className="flex text-lg:hidden px-2">
            <h2 id="text-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate neque esse excepturi illum laborum aliquid, odit fuga?
              Nemo, corporis esse! Blanditiis architecto, ratione odio impedit
              eius odit facere aliquid error.
            </h2>
          </div>

          <div class="">
            <Image
              src="data:image/jpeg;base64,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
              Z"
              alt="test"
              width={300}
              height={500}
              className=" flex flex-row-reverse  "
            />
          </div>
        </section>

        <section>
          <div>
            <label>NOM :</label>
          </div>
          <div>
            <input
              type="text"
              className="border-2 rounded-full border-cyan-200"
            />
          </div>
          <div>
            <label for="">Prénom :</label>
          </div>
          <div>
            <input
              type="text"
              className="border-2 rounded-full border-cyan-200"
            />
          </div>
          <div className="flex flex-row-reverse pr-40">
            <label for="">Email :</label>
          </div>
          <div className="flex flex-row-reverse scroll-mr-9 ">
            <input
              type="email"
              required
              className="border-2 rounded-full border-cyan-200"
            />
          </div>
          <div className="flex flex-row-reverse pr-32">
            <label for="">Téléphone :</label>
          </div>
          <div className="flex flex-row-reverse -2">
            <input
              type="text"
              className="border-2 rounded-full border-cyan-200"
            />
          </div>
          <div>
            <div>
              <label For="">Objet :</label>
            </div>
            <div>
              <input
                type="object"
                size={35}
                className="border-2 rounded-full border-cyan-200"
              />
            </div>
            <label for="">Message :</label>
          </div>
          <div>
            <textarea
              name=""
              id="message"
              cols="40"
              rows="10"
              className="border-2 rounded-lg border-cyan-200"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="border-2 rounded-full00">
              Envoyer
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
