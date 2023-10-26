import React from 'react'
import Input from "../../../components/Input"

const PostThreads = () => {
  const [Company, setCompany] = useState("");
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Saraly, setSaraly] = useState("");
  const [Period, setPeriod] = useState("");
  const [Select, setSelect] = useState("");
  const [Deadline, setDeadline] = useState("");
  const handleInputCompany = (value) => {
    setCompany(value);
  };
  const handleInputTitle = (value) => {
    setTitle(value);
  };
  const handleInputDetails = (value) => {
    setDetails(value);
  };
  const handleInputSaraly = (value) => {
    setSaraly(value);
  };
  const handleInputPeriod = (value) => {
    setPeriod(value);
  };
  const handleInputSelect = (value) => {
    setSelect(value);
  };
  const handleInputDeadline = (value) => {
    setDeadline(value);
  };
  

  return (
    <>
    <Input onInputChange={handleInputCompany} />
    <Input onInputChange={handleInputTitle} />
    <Input onInputChange={handleInputDetails} />
    <Input onInputChange={handleInputSaraly} />
    <Input onInputChange={handleInputPeriod} />
    <Input onInputChange={handleInputSelect} />
    <Input onInputChange={handleInputDeadline} />

    </>
    )
}

export default PostThreads;