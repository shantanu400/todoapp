let todo=["Mug up","Share with other","Apply"];
let progress=["Reading Notes","sharing","Appling"];
let done=["Muged up","shared","Applied"];

let todocol=document.getElementById("todo");
let progresscol=document.getElementById("progress");
let donecol=document.getElementById("done");

function rendertodo() {
    todocol.innerHTML=`<h1 style="background: #ecdae8; border-radius: 20%;">To-Do</h1>`;
    todo.forEach((item,index)=>{
    todocol.innerHTML+=`
    <div class="todo"> 
            <p>${item}</p>
            <button onclick=shifttoright('todo',${index})>&rarr;</button>
    </div>`;
    
})
}

function renderprogress(){
    
    progresscol.innerHTML=`<h1 style="background: #ecdae8; border-radius: 20%;">Progress</h1>`;
    progress.forEach((item,index)=>{
    progresscol.innerHTML+=
    `<div class="progress"> 
    <p>${item}</p>
    <button onclick=shifttoleft('progress',${index})>&larr;</button>
    <button onclick=shifttoright('progress',${index})>&rarr;</button>
    
    
</div>
    `;
})
}

function renderdone(){
    donecol.innerHTML=`<h1 style="background: #ecdae8; border-radius: 20%;">Done</h1>`;
    done.forEach((item,index)=>{
        donecol.innerHTML+=
        `
        <div class="todo"> 
                <p>${item}</p>
                <button onclick=shifttoleft('done',${index})>&larr;</button>
        </div>`
    })
}

function shifttoright(colname,index){
   
    console.log("topush element is ",colname);
    if(colname=="todo"){
        let tobepush=todo[index];
        todo=todo.filter((item,i)=>i!=index);
        rendertodo();
        progress.push(tobepush);
        renderprogress();
    }
    else if(colname=="progress"){
        let tobepush=progress[index];
        progress=progress.filter((item,i)=>i!=index);
            renderprogress();
            done.push(tobepush);
            renderdone();

        }
        
    }
    function shifttoleft(colname,index){
            if(colname=="done") {
                let tobepush=done[index];
                done=done.filter((item,i)=>i!=index);
                    renderdone();
                    progress.push(tobepush);
                    renderprogress();
        
                }
            else if(colname=="progress"){
                let tobepush=progress[index];
            progress=progress.filter((item,i)=>i!=index);
                renderprogress();
                todo.push(tobepush);
                rendertodo();
            }
                        
    }

rendertodo()
renderprogress()
renderdone()


