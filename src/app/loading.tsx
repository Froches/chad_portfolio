import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <HashLoader color="#FF8C00" size={80} />
    </div>
  );
};

export default Loading;
