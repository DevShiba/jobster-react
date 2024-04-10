import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";
import jobsSlice from "./features/jobs/jobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobsSlice,
  },
});

