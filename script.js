let btn=document.getElementsByTagName('button')[0]
let ul=document.getElementsByTagName('ul')[0]
btn.addEventListener('click',()=>{
    let name=prompt('name of website')
    let url=prompt('link of the website')
    let li = ul.insertAdjacentHTML("afterbegin",`<li><a href="${url}">${name}</a></li>`)
    localStorage.setItem(name,url)
})
let a =localStorage.length
for(i=0;i<a;i++){
    let out=localStorage.key(i)
    let page=localStorage.getItem(out)
    let li = ul.insertAdjacentHTML("afterbegin", `<li><a href='${page}'>${out}</a></li>`)
}