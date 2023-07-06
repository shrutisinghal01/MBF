function Load(){

 setInterval(function Stove()
{
    
    const str = ["ON Blast","ON Gas"];
    const stove_container = [document.getElementById('Top-Stove'),document.getElementById('Middle-Stove'),document.getElementById('Bottom-Stove')];
    const data = [1009,1002,1017,1028,1014,984,993,1026,1023,990,999,1035,982,1005,1019,1031,1037,1013,988,1000,1020,1022,986,992];
    const container = [document.getElementById('Top-Stove').querySelector('.stove-container').querySelector('.HBT').querySelector('strong'),
                       document.getElementById('Middle-Stove').querySelector('.stove-container').querySelector('.HBT').querySelector('strong'),
                       document.getElementById('Bottom-Stove').querySelector('.stove-container').querySelector('.HBT').querySelector('strong')];
    const value = [parseInt(container[0].textContent),parseInt(container[1].textContent),parseInt(container[2].textContent)];
    const status = [document.getElementsByClassName('status')[0].querySelector('h2'),
                    document.getElementsByClassName('status')[1].querySelector('h2'),
                    document.getElementsByClassName('status')[2].querySelector('h2')];
    for(let i=0;i<3;i++)
    {
        status[i].textContent = '';
    }
    let index = Math.floor(Math.random()*3);
    status[index].textContent = "ON Blast";
    for(let i = 0 ;i<3;i++)
    { 
        if(status[i].textContent == "ON Blast")
        {
            container[i].textContent = data[Math.floor(Math.random()*data.length)];
            stove_container[i].style.backgroundColor = 'black';
        }
        else
        {
            container[i].textContent = '';
            stove_container[i].style.backgroundColor = "#FEFF86";
            status[i].textContent = "ON Gas";
        }
    }
},5000);

setInterval(function suggest() {
    const str = document.getElementById('Comments');
    const newElement = document.createElement('p');
    const content = ['Chances of scaffold reduce wind flow by - 1000 nmq/hr .' , 'Decrease in ITA CO , add coke + 3kg.']
    newElement.textContent = content[Math.floor(Math.random()*content.length)];
    if(str.querySelector('p'))
    {

        str.innerHTML = '';
    }
    Comments.appendChild(newElement);
},5000);

setInterval(function flux()
{
    const data = [153,82,67,168,132,98,142,63,166,109,73,180,56,87,194,105,150,79,188,55,121,97,137,183];
    const container = [document.getElementById('r1-1'),document.getElementById('r1-2'),document.getElementById('r1-3'),
                       document.getElementById('r1-4'),document.getElementById('r1-5'),
                       document.getElementById('r2-1'),document.getElementById('r2-2'),document.getElementById('r2-3'),
                       document.getElementById('r2-4'),document.getElementById('r2-5'),
                       document.getElementById('r3-1'),document.getElementById('r3-2'),document.getElementById('r3-3'),
                       document.getElementById('r3-4'),document.getElementById('r3-5'),
                       document.getElementById('r4-1'),document.getElementById('r4-2'),document.getElementById('r4-3'),
                       document.getElementById('r4-4'),document.getElementById('r4-5'),
                       document.getElementById('r5-1'),document.getElementById('r5-2'),document.getElementById('r5-3'),
                       document.getElementById('r5-4'),document.getElementById('r5-5'),
                       document.getElementById('r6-1'),document.getElementById('r6-2'),document.getElementById('r6-3'),
                       document.getElementById('r6-4'),document.getElementById('r6-5')];
    for(let i=0;i<container.length;i++)
    {
        container[i].textContent = data[Math.floor(Math.random()*data.length)];
        if(parseInt(container[i].textContent)>= 50 && parseInt(container[i].textContent) < 120)
        {
            container[i].style.backgroundColor = "#ADE792";
        } 
        else if(parseInt(container[i].textContent) >=120 && parseInt(container[i].textContent)< 150)
        {
            container[i].style.backgroundColor = "#FEFF86";
        }
        else
        {
            container[i].style.backgroundColor = "#F24C3D";
        }
    }
},5000);
setInterval(function Ingress()
{
    let temp;
    const data = [92,183,58,169,137,185,102,127,66,165,153,76,113,140,162,68,111,116,185,87,97,157,73,112];
    const container = document.getElementsByClassName('a');
    const color = ["#ADE792","#090580","#F24C3D"];
    for(let i=0;i<container.length;i++)
    {
        temp = data[Math.floor(Math.random()*data.length)];
        if(temp >= 50 && temp < 120)
        {
            container[i].style.borderColor = color[0];
        }
        else if(temp >=120 && temp < 150)
        {
            container[i].style.borderColor = color[1];
        }
        else{
            container[i].style.borderColor = color[2];
        }
    }
},5000);
}