

const backgroundStyle = {
  backgroundImage: `url('https://t4.ftcdn.net/jpg/06/02/15/37/240_F_602153719_YJDrhhHIJkA8Htl7YSM9SJgsFABib92g.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
};

export default function Home() {
  return (
    <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
      <div className="text-center text-white">
        <h1>Welcome to Puppy Bowl</h1>
        <p>The best game out there</p>
      </div>
    </div>
  );
}