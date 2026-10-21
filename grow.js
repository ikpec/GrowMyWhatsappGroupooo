import { ADMIN_WHATSAPP_NUMBER } from "./config.js";
const form=document.getElementById("growthForm");
form?.addEventListener("submit",(event)=>{
 event.preventDefault();
 const link=document.getElementById("groupLink").value.trim();
 const topic=document.getElementById("groupTopic").value.trim();
 const target=Number(document.getElementById("targetMembers").value);
 const msg=document.getElementById("growthMessage");
 if(!/^https?:\/\/chat\.whatsapp\.com\//i.test(link)){msg.textContent="Please enter a valid WhatsApp group invite link.";msg.classList.add("error");return;}
 if(!Number.isInteger(target)||target<1){msg.textContent="Enter a target member number greater than zero.";msg.classList.add("error");return;}
 const text=`Hello, I want to grow my WhatsApp group.%0A%0AGroup link: ${encodeURIComponent(link)}%0AGroup topic/description: ${encodeURIComponent(topic)}%0ATarget members: ${target}`;
 const digits=ADMIN_WHATSAPP_NUMBER.replace(/\D/g,"");
 // Convert Nigerian local mobile format to international format for wa.me.
 const international=digits.startsWith("0")?"234"+digits.slice(1):digits;
 window.location.href=`https://wa.me/${international}?text=${text}`;
});
