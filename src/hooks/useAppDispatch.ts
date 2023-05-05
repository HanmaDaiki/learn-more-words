import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

const useAppDispatch = () => useDispatch<typeof AppDispatch>();

export { useAppDispatch };