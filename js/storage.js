const KEY='mounjaro-rechner-v3';
function loadState(){try{return JSON.parse(localStorage.getItem(KEY))||{pen:null,history:[]}}catch{return{pen:null,history:[]}}}
function saveState(state){localStorage.setItem(KEY,JSON.stringify(state))}
function exportState(state){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mounjaro-rechner-backup.json';a.click();URL.revokeObjectURL(a.href)}
