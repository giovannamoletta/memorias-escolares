// Botão "Abrir todas / Fechar todas" do portfólio de redações (leitor sanfonado)
(function(){
  var btn=document.getElementById('toggleAll');
  var items=[].slice.call(document.querySelectorAll('.essay'));
  btn.addEventListener('click',function(){
    var open=!items.every(function(d){return d.open});
    items.forEach(function(d){d.open=open});
    btn.textContent=open?'Fechar todas':'Abrir todas';
  });
})();
