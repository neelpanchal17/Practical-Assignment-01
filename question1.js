const readline = require("readline");
const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});
const fs = require("fs");
const path = require('path');
var filename = "";
var content  = "";
var renamef = "";
var createdirectory = () =>{
    rl.question("Enter Directory Name :- ",(dirname)=>{
        fs.mkdir(path.join(__dirname,dirname),(err)=>{
            if(err)
            {
                return console.error(err);
            }
            console.log("Directory Created Successfully!!");
            input();
            start();
        }); 
    });
    
};
var removedirectory = () =>{
    rl.question("Enter Directory Name :- ",(rmvdirname)=>{
        fs.rmdir(rmvdirname,{recursive:true,force:true},(err) =>{
            if(err)
            {
                console.log(err);
            }
            console.log("Deleted!!");
            input();
            start();
        });
    });
   
};
var createfilewizard = () =>{
    console.log("\n Here We Will Create A File :- ");
    rl.question("Please Enter Name Of The File :- ",(ans)=>{
        filename = ans+".txt";
        rl.question("Content Of the File :- ",  (ans)=>{
                content = ans;
                createfile();
        });
    });
};
var createfile = () =>{
        fs.writeFile(filename,content,(err)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("File Created!!!");
            }
            repeat();
        });
};
var askfile = () =>{
    rl.question("Please Enter Name Of The File :- ",(ans)=>{
        filename = ans+".txt";
        readdata();
    });
};
var readdata = () =>{
    fs.readFile(filename,'utf8',(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(data);
        }
        repeat();
    });
};
var appenddata = () =>{
    rl.question("Please Enter File Name You Want to Append :-",(ans)=>{
        filename = ans+".txt";
        rl.question("Enter content you want to append :- ",  (ans)=>{
            content = ans;
            appen();
        });
    });
};
var appen = () =>{
    fs.appendFile(filename,content,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Data Appended !!");
        }
        repeat();
    });

};
var updatedata = () =>{
    rl.question("Please Enter Name Of The File :- ",(ans)=>{
        filename = ans+".txt";
        rl.question("Content Of the File :- ",  (ans)=>{
                content = ans;
                up();
        });
    });
};
var up = () =>{
    fs.writeFile(filename,content,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("Data Updated!!");
        }
        repeat();
    });
};
var renamefile = () =>{
    rl.question("Please Enter Name Of the File you want to Rename :- ",(ans)=>{
        filename = ans+".txt";
        rl.question("Enter New Name for a File :- ",  (ans)=>{
                renamef = ans+".txt";
                re();
        });
    });
};
var re = () =>{
    fs.rename(filename,renamef,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {   
            console.log("File Renamed");
        }
        repeat();
    });
}
var del = ()=>{
    fs.unlink(filename,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("File Deleted !");
        }
        repeat();
    });
};
var deletefile = () =>{
    rl.question("Please Enter Name Of The File You Want To Delete :- ",(ans)=>{
        filename = ans+".txt";
        del();
    });
};
var input = () => { 
console.log("\n Enter 1 For Create a new directory.");
console.log("\n Enter 2 For Remove a directory.");
console.log("\n Enter 3 for Create a new Text File.");
console.log("\n Enter 4 for read the data of a file.");
console.log("\n Enter 5 for append to an existing file.");
console.log("\n Enter 6 for update/replace the data of a file.");
console.log("\n Enter 7 for rename the file.");
console.log("\n Enter 8 for delete the file.");
console.log("\n Enter 0 for exit.");
};
var start = () =>{
    rl.question("Enter Your Choice :- ",(answer)=>{
        if(answer=="1")
        {
            createdirectory();
        }
        else if(answer=="2")
        {
            removedirectory();
        }
        else if(answer=="3")
        {
            createfilewizard();
        }
        else if(answer=="4")
        {
            askfile();
        }
        else if(answer=="5")
        {
            appenddata();
        }
        else if(answer=="6")
        {
            updatedata();
        }
        else if(answer=="7")
        {
            renamefile();
        }
        else if(answer=="8")
        {
            deletefile();
        }
        else if(answer=="0")
        {
            rl.close();
        }
        else
        {
            console.log("Wrong Choice Please Enter Valid Input !!");
            start();
        }
    });
};
var repeat = () =>{
    input();
    start();
};
console.log("Welcome To File management System !!");
repeat();