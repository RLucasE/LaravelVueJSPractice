// stores/users.js
import { defineStore } from "pinia";
import axiosInstance from "@/lib/helpers/axiosDefault";
import { loginLogic, registerLogic } from "@/lib/authentication";
import { useStorageStore } from "@/stores/storage";

export const useAuthStore = defineStore("auth", () => {
  let user = useStorageStore().getUser();
  let isAuthenticated = false;

  function getUser() {
    return user.value;
  }

  function isLoggedIn() {
    return user.value !== null;
  }

  function isCustomer() {
    return user && user.value.roles.includes("customer");
  }

  function isAdmin() {
    return user && user.value.roles.includes("admin");
  }

  function isSeller() {
    return user && user.value.roles.includes("seller");
  }

  function isDefaultRole() {
    return user && user.value.roles.includes("default");
  }

  function selectingRole() {
    return user && user.value.state === "selecting";
  }

  function registeringEstablishment() {
    return user && user.value.state === "registering";
  }

  function waitingConfirmation() {
    return user && user.value.state === "waiting_for_confirmation";
  }

  function active() {
    return user && user.value.state === "active";
  }

  async function fetchUser() {
    try {
      const data = await axiosInstance.get("/user");
      console.log("Fetched user", data.data);
      user.value = data.data;
      isAuthenticated = true;
    } catch (error) {
      console.log("error fetching user", error);
      isAuthenticated = false;
      user.value = null;
      throw error;
    }
  }

  async function refreshUser() {
    try {
      await fetchUser();
    } catch (error) {
      console.log("error refreshing user", error);
    }
  }

  async function login(data) {
    try {
      await loginLogic(data);
      await fetchUser();
    } catch (error) {
      console.error("login error in auth store", error);
      throw error;
    }
  }

  async function register(data) {
    try {
      await registerLogic(data);
      await fetchUser();
    } catch (error) {
      console.error("register error in auth store", error);
      throw error;
    }
  }

  async function heavyVerifySession() {
    try {
      await fetchUser();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function verifySession() {
    if (user && !isAuthenticated) {
      console.log("User in auth store", user);
      try {
        await fetchUser();
      } catch (error) {
        console.error("Error verifying session in auth.verifySession", error);
        throw error;
      }
    }
    console.log(isAuthenticated);
  }

  return {
    getUser,
    isCustomer,
    isAdmin,
    isSeller,
    isDefaultRole,
    selectingRole,
    registeringEstablishment,
    waitingConfirmation,
    active,
    heavyVerifySession,
    verifySession,
    isLoggedIn,
    fetchUser,
    refreshUser,
    login,
    register,
  };
});
