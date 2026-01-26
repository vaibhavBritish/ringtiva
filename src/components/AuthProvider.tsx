"use client";

import { useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../../Redux/userSlice";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });

        if (!res.ok) {
          dispatch(clearUser());
          return;
        }

        const data = await res.json();
        if (data?.user) {
          dispatch(setUser(data.user));
        } else {
          dispatch(clearUser());
        }
      } catch (error) {
        dispatch(clearUser());
      }
    };

    loadUser();
  }, [dispatch]);

  return <>{children}</>;
}
