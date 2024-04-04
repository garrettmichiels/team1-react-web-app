import * as client from "./Client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useEffect } from "react";

export default function CurrentUser({ children }: { children: any }) {
  const dispatch = useDispatch();
  const fetchCurrentUser = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (error) {
      dispatch(setCurrentUser(null));
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  return children;
}