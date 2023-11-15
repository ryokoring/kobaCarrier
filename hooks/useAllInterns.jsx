import axios from "axios";
import useSWR from 'swr';
const fetcher = url => axios.get(url).then(res => res.data)

export const useAllInterns = () => {
  const InternURL = process.env.NEXT_PUBLIC_INTERNSHIPS_API_URL;
  console.log("internURL",InternURL);
  const { data, error, isLoading } = useSWR(InternURL, fetcher);

  return{
    intern:data,
    isLoading,
    isError: error,
  };
};