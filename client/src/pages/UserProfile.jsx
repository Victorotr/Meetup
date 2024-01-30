
import { useEffect, useState } from "react";
import axios from "axios";
import nouser from "../assets/no_picture.png";
import { Handler } from "../context/Context";
import { ImCamera } from "react-icons/im";
import { FaGear } from "react-icons/fa6";
import { useNavigate ,useParams} from "react-router-dom";
const UserProfile = () => {
  const { setuser, user, settoast,accessLoading } = Handler();
  const navigate = useNavigate();

  const getUserInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });

  

  const { id } = useParams();
  const [userData, setuserData] = useState(null);
  const getUser = async () => {
    if (!user && !accessLoading) {
      navigate("/signin");
      settoast({
        on: true,
        type: "warning",
        text: "Accede para ver la info de usuarios",
      });
    }
    try {
      const res = await getUserInstance.get(`/user/details/${id}`);
      if (res.status === 200 && res.data.user) {
        setuserData(res.data.user);
        if (res.data.user.id === user.id) {
          
          setuser(res.data.user);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);



  return (
    <main>
      <section className="mx-auto w-full max-w-2xl py-5 ">
        <div className="flex  px-3 relative">
          <div className="relative w-36 ">
            <img
              className="w-24 h-24 min-w-24 min-h-24 sm:w-28 sm:h-28 sm:min-w-28 sm:min-h-28 rounded-full object-cover border-2 border-zinc-900/20 m-1"
              src={userData?.avatar ? userData?.avatar : nouser}
              alt="User picture"
            />
            <div
              onClick={() => navigate("/edit/user/details")}
              className={`${
                userData?.id != user?.id && "hidden"
              } absolute top-14 right-[30px] sm:top-[70px] sm:right-[20px] border-2 border-zinc-900/40 bg-zinc-50 p-1 flex items-center justify-center rounded-full`}
            >
              <ImCamera className="text-zinc-900/80" />
            </div>
          </div>
          <div className="mx-3 flex flex-col gap-2">
            <h1 className="text-xl font-medium mt-1 ">{userData?.username}</h1>
            <div className="">
              <p>{userData?.bio ? userData.bio : 'esta historia es un secreto por ahora..'}</p>
            </div>
            <div className={`${userData?.id != user?.id && "hidden"}`}>
              <button
                disabled={userData?.id != user?.id}
                onClick={() => navigate("/edit/user/details")}
                className="border px-5 sm:px-20 py-1 flex items-center gap-2 text-zinc-900/80 rounded-lg"
              >
                <span>
                  <FaGear />
                </span>
                Editar perfil
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
