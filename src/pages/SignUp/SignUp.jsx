import { GiStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signUp } from "../../app/authMiddleware";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    // console.log(data);
    setEmail(data.email);
    setPassword(data.password);
    dispatch(signUp(data.email, data.password))
  };

  console.log(email, password);
  return (
    <>
      <section className="flex justify-center items-center my-12">
        <div className="w-[444px] h-[576px] flex justify-start shadow-2xl rounded-lg border border-[#f0f0f0] shadow-[#f0f0f1]">
          <div className="mx-12 my-14 w-full">
            <div className="flex items-center h-[46px] w-[159px]">
              <GiStack className="w-[51px] h-6 text-[#6941C6]" />
              <h1 className="text-[28px] font-bold text-[#4E5D78]">Stack</h1>
            </div>
            <p className="text-xl text-[#404040] font-semibold mt-4 mb-6">
              Sign up to join with stack
            </p>
            <div className="mb-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="h-[96px]">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#344054] font-medium block my-2"
                  >
                    Email:
                  </label>
                  <input
                    placeholder="Enter Email"
                    className={`w-[320px] h-[44px] outline-0 block ring-offset-1 ring-4 rounded-md px-2 text-base text-[#101828] 
                    ${
                      errors.password
                        ? "ring-[#fbe1df] ring-offset-[#F04438]"
                        : "ring-[#ecdefd] ring-offset-[#d6bbfb]"
                    }`}
                    type="email"
                    id="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <p className="h-5 my-2 text-sm text-[#F04438]">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="h-[96px]">
                  <label
                    htmlFor="password"
                    className="text-sm text-[#344054] font-medium block my-2"
                  >
                    Password:
                  </label>
                  <input
                    placeholder="Enter Password"
                    className={`w-[320px] h-[44px] outline-0 block ring-offset-1 ring-4 rounded-md px-2 text-base text-[#101828] 
                    ${
                      errors.password
                        ? "ring-[#fbe1df] ring-offset-[#F04438]"
                        : "ring-[#ecdefd] ring-offset-[#d6bbfb]"
                    }`}
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <p className="h-5 my-2 text-sm text-[#F04438]">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="h-1 w-[320px] flex my-3">
                  <div className="w-[42px] h-1 bg-[#F04438] rounded "></div>
                  <div className="w-[42px] h-1 bg-[#F04438] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                </div>
                <input
                  className="mt-2 cursor-pointer  bg-[#6941c6] text-white w-[320px] h-[44px] text-center align-middle rounded-md"
                  type="submit"
                  value="Sign Up"
                  disabled={loading}
                />
              </form>
            </div>
            <p className="text-base font-medium text-[#B0B7C3] my-6">
              Already have an account?{" "}
              <Link className="text-[#377DFF]" to="/signin">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
