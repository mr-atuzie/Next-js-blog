"use client";
import { createUser } from "@/services/user";

const RegisterPage = () => {
  const handleRegister = async () => {
    setLoading(true);

    const formData = {
      lastname: "Atuzie",
      firstname: "Rex",
      username: "Overlord",
      email: "rexatuzie@gmail.com",
      password: "12345678",
    };

    const res = await createUser(formData);

    console.log(res);

    if (res?.error) {
      console.log(res?.error);
    }

    if (res?.message) {
      console.log(res?.message);
    }
  };
  return (
    <div>
      <button
        className="bg-black disabled:opacity-60 text-white rounded-md p-2 my-auto"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
