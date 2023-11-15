import useSWR from 'swr';
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data)

export const useIntern = (id) => {
  const InternURL = process.env.NEXT_PUBLIC_INTERNSHIPS_API_URL;
  console.log("internURL",InternURL);
  const { data, error, isLoading } = useSWR(`${InternURL}/${id}`, fetcher);

  return{
    intern:data,
    isLoading,
    isError: error,
  };
};
