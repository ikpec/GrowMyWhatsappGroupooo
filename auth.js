import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./config.js";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
function message(el, text, error=false){ if(!el)return; el.textContent=text; el.classList.toggle("error",error); }
function loading(button, active, label){ if(!button)return; button.disabled=active; const first=button.querySelector("span"); if(first) first.textContent=active?"Please wait…":label; }
if(signupForm){
 signupForm.addEventListener("submit", async (event)=>{
  event.preventDefault();
  const email=document.getElementById("signupEmail").value.trim();
  const phone=document.getElementById("signupPhone").value.trim();
  const password=document.getElementById("signupPassword").value;
  const confirm=document.getElementById("confirmPassword").value;
  const msg=document.getElementById("signupMessage"), btn=document.getElementById("signupButton");
  if(password!==confirm){message(msg,"Passwords do not match.",true);return;}
  loading(btn,true,"Create my account"); message(msg,"");
  try{
   const {data,error}=await supabase.auth.signUp({email,password,options:{data:{phone_number:phone},emailRedirectTo:window.location.href.replace(/signup\.html.*/,"dashboard.html")}});
   if(error)throw error;
   if(data.session){window.location.href="dashboard.html";return;}
   message(msg,"Account created. If email confirmation is enabled in Supabase, check your inbox, confirm your email, then log in.");
  }catch(e){message(msg,e.message||"Unable to create account. Please try again.",true);}
  finally{loading(btn,false,"Create my account");}
 });
}
if(loginForm){
 loginForm.addEventListener("submit",async(event)=>{
  event.preventDefault();
  const email=document.getElementById("loginEmail").value.trim();
  const password=document.getElementById("loginPassword").value;
  const msg=document.getElementById("loginMessage"),btn=document.getElementById("loginButton");
  loading(btn,true,"Log in");message(msg,"");
  try{const {data,error}=await supabase.auth.signInWithPassword({email,password});if(error)throw error;if(data.session)window.location.href="dashboard.html";}
  catch(e){message(msg,e.message||"Unable to log in. Check your details.",true);}
  finally{loading(btn,false,"Log in");}
 });
}
