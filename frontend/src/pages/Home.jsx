import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="container mx-auto mt-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Witamy w sklepie z artykułami strażackimi!</h1>
        <p className="text-xl mb-8">
          Oferujemy szeroki wybór wysokiej jakości sprzętu i odzieży strażackiej, aby zapewnić bezpieczeństwo i wydajność Twojej jednostce.
        </p>
      </div>
      <br></br>
      <Header className="flex justify-center" />
    </>
  );
};

export default Home;
