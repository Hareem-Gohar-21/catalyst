
const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10">
        <h1 className="text-4xl font-bold text-sky-700 text-center mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Welcome to our store! We are passionate about providing the best products and services.
        </p>
        <div className="flex justify-center">
          <img 
            src="/assets/images/about-us.jpg" 
            alt="About Us" 
            className="rounded-lg shadow-lg w-2/3"
          />
        </div>
      </div>
    </>
  );
};
export default AboutUs;

