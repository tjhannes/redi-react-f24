import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { useEffect } from "react";

export default function MoreCoolLibraries() {
  const showSuccess = () => toast.success("Wow so easy!");
  const showError = () => toast.error("Oops! Something went wrong.");
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div>
      <div className="showcase-box">
        <button
          className="px-2 py-1 rounded-md border border-teal-500"
          onClick={showSuccess}
        >
          Well done
        </button>
        <button
          className="px-2 py-1 rounded-md bg-teal-500 text-white"
          onClick={showError}
        >
          Show error
        </button>
      </div>
      <ToastContainer position="top-right" />
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div
        data-aos="fade-up"
        className="bg-gray-300 m-5 text-center rounded-full p-5"
      >
        AOS fade-up effect
      </div>
      <div className="h-96"></div>
      <div
        data-aos="fade-right"
        className="bg-gray-300 m-5 text-center rounded-full p-5"
      >
        AOS fade-right effect
      </div>
      <div className="h-96"></div>
    </div>
  );
}
