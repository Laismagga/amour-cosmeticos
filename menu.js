document.addEventListener('DOMContentLoaded', function() {
 
  const carrinhoBtn = document.querySelector('.botao__carrinho');

  
  if (carrinhoBtn) {
      
      const menuHamburguer = carrinhoBtn.querySelector('.menu-hamburguer');

      
      carrinhoBtn.addEventListener('mouseover', function() {
        
          menuHamburguer.style.display = 'block';
      });

      carrinhoBtn.addEventListener('mouseout', function() {
    
          menuHamburguer.style.display = 'none';
      });
  }
});











