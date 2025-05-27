import { useEffect, useState } from "react"
import { getDatabase, onValue, ref, update } from "firebase/database";

// import ip from "ip";

const Input = (label: string, value:string, onChange: React.ChangeEventHandler<HTMLInputElement>) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <input type="text" value={value} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
    </div>
  )
}

const InputNumber = (label: string, count:number, setCount:React.Dispatch<React.SetStateAction<number>>) => {
  return (
    <div className="w-[13vw]">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="relative flex items-center">
        <button type="button" id="decrement-button" onClick={() =>setCount(c => c-1)} data-input-counter-decrement="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
            </svg>
        </button>
        <div className="pb-1 justify-center items-center bg-gray-50 border-x-0 border-gray-300 h-11 font-bold text-center text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 flex w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          {count}
        </div>
        <button type="button" id="increment-button" onClick={() => setCount(c => c+1)} data-input-counter-increment="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
      </div>
    </div>
  )
}
const Select = (label: string, options: string[],value: string, onChange:React.ChangeEventHandler<HTMLSelectElement>) => {
  return(
    <div>
      <label className="block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select onChange={onChange} value={value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {options.map(option => <option key={option} defaultValue={option}>{option}</option>)}
      </select>
    </div>
  )
}

type MatchInfoType = {
  title: string;
  blue_teamName: string;
  orange_teamName: string;
  blue_setPoint: number;
  orange_setPoint: number;
  bo: "Bo1" | "Bo3";
};

const Controller = () => {
  const [title, setTitle] = useState("");
  const [blueTeamName, setBlueTeamName] = useState("");
  const [orangeTeamName, setOrangeTeamName] = useState("");
  const [blueSetPoint, setBlueSetPoint] = useState(0);
  const [orangeSetPoint, setOrangeSetPoint] = useState(0);
  const [bo, setBo] = useState<"Bo1" | "Bo3">("Bo1");


  const db = getDatabase();
  const dataRef = ref(db,"match_info");
  useEffect(() => {
    const listener = onValue(dataRef, (snapshot) => {
      const data:MatchInfoType = snapshot.val();
      setTitle(data.title);
      setBlueTeamName(data.blue_teamName);
      setOrangeTeamName(data.orange_teamName);
      setBlueSetPoint(data.blue_setPoint);
      setOrangeSetPoint(data.orange_setPoint);
      setBo(data.bo);
      console.log(data);
    })
    return () => {
      console.log("unmount");
      listener();
    }
  },[]);
  const submit = () => {
    const sendData: MatchInfoType = {
      title, blue_teamName: blueTeamName, orange_teamName: orangeTeamName, blue_setPoint: blueSetPoint, orange_setPoint: orangeSetPoint, bo
    }
    update(dataRef, sendData);
  };
  return(
    <div>
      <div className="w-[95vw]">
        {/* <div className="grid grid-cols-5 gap-0">
          <div className="col-start-3 h-[1.15vw] bg-slate-100">aaa</div>
        </div> */}
        {/* <div className={`pt-[0.8vw] grid grid-cols-5 gap-0`}>
          {[1,2,3,4,5].map((i)=><div key={i} className="bg-cyan-300 h-12 opacity-60 border border-black"></div>)}
        </div> */}
      </div>
      <div className="mt-10 w-[95vw]">
        <div className="w-full flex justify-center font-bold text-3xl">Controller</div>
        <div>
          <div className="mx-auto">
            <div className="w-[30vw] mx-auto">{Input("Title",title,(e) => setTitle(e.target.value))}</div>
            <div className="flex mt-2 gap-2 justify-center">
              {Input("blue teamName",blueTeamName,(e) => setBlueTeamName(e.target.value))}
              {Input("orange teamName",orangeTeamName,(e) => setOrangeTeamName(e.target.value))}
            </div>
            <div className="flex mt-2 gap-2 justify-center">
              {InputNumber("blue setPoint",blueSetPoint,setBlueSetPoint)}
              {InputNumber("orange setPoint",orangeSetPoint,setOrangeSetPoint)}
            </div>
            <div className="mx-auto mt-2 w-[30vw] flex items-center justify-center">
              {Select("bo",["Bo1","Bo3"],bo,(e) => setBo(e.target.value as "Bo1" | "Bo3"))}
            </div>
            <div className="flex justify-center">
              <button type="button" onClick={submit} className="mt-10  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Controller;