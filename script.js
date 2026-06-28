
const colors=['#E8829A','#9B89C4','#2A9D8F','#F4A261','#E9C46A'];
const container=document.getElementById('particles');
for(let i=0;i<22;i++){
  const p=document.createElement('div');
  p.className='particle';
  const size=Math.random()*10+5;
  p.style.cssText=`width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*15+10}s;animation-delay:${Math.random()*10}s;`;
  container.appendChild(p);
}
const navLinks=document.querySelectorAll('.nav-links a');
const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-100)current=s.id});
  navLinks.forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+current)});
});
const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible')}});
},{threshold:0.15});
reveals.forEach(r=>observer.observe(r));