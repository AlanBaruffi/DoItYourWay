    document.addEventListener('DOMContentLoaded', function() {
        const inputSenha = document.getElementById("input_senha");
        const inputEMAIL = document.getElementById("input_email");
        const botaoRevelasenha = document.getElementById("RevelarSenhaButton");
        const botaoTelaCadastro = document.getElementById("botaoCadastro");
        const botaoLogin = document.getElementById("botaoLogin");

        botaoRevelasenha.addEventListener('click', function(e) {
            e.preventDefault();

            if(inputSenha.type === 'password') {
                inputSenha.type = 'text';
                botaoRevelasenha.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                    </svg>
                `;
            } else {
                inputSenha.type = 'password';
                botaoRevelasenha.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" id="Iconezoio" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg>
                `;
            }
        });

        function verificaInputs(e){
            e.preventDefault();
            const valorEmail = inputEMAIL.value;
            const valorSenha = inputSenha.value;
        if (valorEmail === '' || valorSenha === ''){
                alert('Para fazer login, digite um email existente e uma senha valida');
                return false;
            } else{
                return true;
            }
        };
    });
