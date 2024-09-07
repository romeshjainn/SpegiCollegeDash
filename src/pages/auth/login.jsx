import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    mobileNumber: "",
    otp: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/\D/g, "");

    if (name === "mobileNumber") {
      if (sanitizedValue.length <= 10) {
        setInputs((prev) => ({ ...prev, [name]: sanitizedValue }));
      }
    } else if (sanitizedValue.length <= 6) {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRequestOtp = () => {
    toast.dismiss();
    if (inputs.mobileNumber.length === 10) {
      toast.loading("Requesting OTP");
      setTimeout(() => {
        toast.dismiss();
        toast.success("OTP requested successfully");
      }, 2000);
    } else {
      toast.error("Mobile number must be 10 digits");
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4">
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">
                  Sign in
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Please enter your details to sign in.
                </p>
              </div>

              <div>
                <label className="font-semibold text-gray-800 text-sm mb-2 block">
                  Mobile Number
                </label>
                <div className="relative flex gap-2 items-center">
                  <input
                    name="mobileNumber"
                    type="tel"
                    value={inputs.mobileNumber}
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter your number"
                    onChange={handleInput}
                    maxLength={10} // Restrict input to 10 characters
                  />
                  <div
                    onClick={handleRequestOtp}
                    // className="cursor-pointer min-w-[35%] text-center text-nowrap font-medium text-sm text-white border border-gray-300 px-2 py-3 rounded-lg outline-blue-600 bg-[#1d4ed8]"
                    className="cursor-pointer min-w-[35%] text-center text-nowrap font-medium text-sm text-white border border-gray-300 px-2 py-3 rounded-lg outline-blue-600"
                    style={{
                      backgroundColor:
                        inputs.mobileNumber.length !== 10
                          ? "#6b7280"
                          : "#1d4ed8",
                    }}
                  >
                    Request OTP
                  </div>
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-800 text-sm mb-2 block">
                  One Time Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="otp"
                    type="number"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter OTP"
                    value={inputs.otp}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="button"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  style={{
                    backgroundColor:
                      inputs.otp.length !== 6 ? "#6b7280" : "#1d4ed8",
                  }}
                  onClick={() => {
                    toast.dismiss();
                    if (inputs.otp.length == 6) {
                      toast.loading("Signing in");
                      if (inputs.otp == "123456") {
                        localStorage.setItem("type", "student");
                      } else {
                        localStorage.setItem("type", "student");
                      }
                      setTimeout(() => {
                        toast.dismiss();

                        navigate("/dashboard");
                      }, 2000);
                    } else {
                      toast.error("Entered otp is wrong");
                    }
                  }}
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
