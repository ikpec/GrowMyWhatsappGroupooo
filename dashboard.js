import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./config.js";
const supabase=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
const {data:{session}}=await supabase.auth.getSession();
if(!session){window.location.replace("login.html");}
else{const el=document.getElementById("welcomeEmail");if(el)el.textContent=`Signed in as ${session.user.email||"your account"}.`;}
document.getElementById("logoutButton")?.addEventListener("click",async()=>{await supabase.auth.signOut();window.location.replace("index.html");});
