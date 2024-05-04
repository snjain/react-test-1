import PageContent from "../components/PageContent";

function HomePage() {
  return (
    <PageContent title="Welcome!">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/sha1.png"}
          alt="test"
          height={200}
          width={200}
        />
        <img
          src={process.env.PUBLIC_URL + "/sha2.png"}
          alt="test"
          height={200}
          width={200}
        />
        <img
          src={process.env.PUBLIC_URL + "/sha3.png"}
          alt="test"
          height={200}
          width={200}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/sha4.png"}
          alt="test"
          height={200}
          width={200}
        />
        <img
          src={process.env.PUBLIC_URL + "/sha5.png"}
          alt="test"
          height={200}
          width={200}
        />
        <img
          src={process.env.PUBLIC_URL + "/sha6.png"}
          alt="test"
          height={200}
          width={200}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/sha7.png"}
          alt="test"
          height={200}
          width={200}
        />
        <img
          src={process.env.PUBLIC_URL + "/sha8.png"}
          alt="test"
          height={200}
          width={200}
        />
        <img
          src={process.env.PUBLIC_URL + "/sha9.png"}
          alt="test"
          height={200}
          width={200}
        />
      </div>
      <p>Browse all our amazing events!!!!!</p>
    </PageContent>
  );
}

export default HomePage;
