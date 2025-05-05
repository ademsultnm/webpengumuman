// Database siswa
      const siswaData = [
         { nis: "4283", nama: "Adistya Devina Anggareni", status: "LULUS", kelas: "XII - 1" },
         { nis: "4286", nama: "Agnes Nadia Putri", status: "LULUS", kelas: "XII - 1" },
         { nis: "4287", nama: "Agung Satria Sanjaya", status: "LULUS", kelas: "XII - 1" },
         { nis: "4289", nama: "Ajeng Tri Artha Aprilia", status: "LULUS", kelas: "XII - 1" },
         { nis: "4293", nama: "Andhika Bagus Satria Wijaksana", status: "LULUS", kelas: "XII - 1" },
         { nis: "4295", nama: "Arvin Pradana", status: "LULUS", kelas: "XII - 1" },
         { nis: "4299", nama: "Banafsha Seisha Aurora", status: "LULUS", kelas: "XII - 1" },
         { nis: "4300", nama: "Bilqiis Syahfitri Adinitya", status: "LULUS", kelas: "XII - 1" },
         { nis: "4304", nama: "Dhevina Puji Ananda", status: "LULUS", kelas: "XII - 1" },
         { nis: "4306", nama: "Dwi Wahyu Syah Putra", status: "LULUS", kelas: "XII - 1" },
         { nis: "4307", nama: "Eka Satriyo Purnamiswa", status: "LULUS", kelas: "XII - 1" },
         { nis: "4309", nama: "Fajar Dwi Atmaja", status: "LULUS", kelas: "XII - 1" },
         { nis: "4310", nama: "Falahny Winarno", status: "LULUS", kelas: "XII - 1" },
         { nis: "4311", nama: "Farel Lionel Rohi Wie (K)", status: "LULUS", kelas: "XII - 1" },
         { nis: "4312", nama: "Firda Ainsani Al Khalifi", status: "LULUS", kelas: "XII - 1" },
         { nis: "4315", nama: "Gilang Prakoso Natanael", status: "LULUS", kelas: "XII - 1" },
         { nis: "4316", nama: "Gladistya Cantica Faysa Udana", status: "LULUS", kelas: "XII - 1" },
         { nis: "4317", nama: "Hema Fitriyani", status: "LULUS", kelas: "XII - 1" },
         { nis: "4318", nama: "Indra Dwi Nur Cahyo", status: "LULUS", kelas: "XII - 1" },
         { nis: "4320", nama: "Kania Putri Wijayanti", status: "LULUS", kelas: "XII - 1" },
         { nis: "4321", nama: "Kayla Agustin Salsabila", status: "LULUS", kelas: "XII - 1" },
         { nis: "4322", nama: "Laura Artamevia", status: "LULUS", kelas: "XII - 1" },
         { nis: "4324", nama: "Martikta Trasafa", status: "LULUS", kelas: "XII - 1" },
         { nis: "4325", nama: "Michael Goklas Pandapotan Hutasoit (K)", status: "LULUS", kelas: "XII - 1" },
         { nis: "4328", nama: "Muhammad Raffi Arifin Syah", status: "LULUS", kelas: "XII - 1" },
         { nis: "4332", nama: "Nitsa Adawiyyah", status: "LULUS", kelas: "XII - 1" },
         { nis: "4333", nama: "Novansyah Hidayah", status: "LULUS", kelas: "XII - 1" },
         { nis: "4335", nama: "Orrizha Quinnesya Rahmadhani", status: "LULUS", kelas: "XII - 1" },
         { nis: "4338", nama: "Rakhma Puji Cahyono Putri", status: "LULUS", kelas: "XII - 1" },
         { nis: "4340", nama: "Rasya Mahesa Hendrawan", status: "LULUS", kelas: "XII - 1" },
         { nis: "4341", nama: "Rediaz Anugrah Ramadan", status: "LULUS", kelas: "XII - 1" },
         { nis: "4344", nama: "Rossa Putri Unggi Manarta", status: "LULUS", kelas: "XII - 1" },
         { nis: "4345", nama: "Salsabillah Aurelliyah", status: "LULUS", kelas: "XII - 1" },
         { nis: "4347", nama: "Savina Putri Syaharani", status: "LULUS", kelas: "XII - 1" },
         { nis: "4348", nama: "Shafri Aurio Arzaq", status: "LULUS", kelas: "XII - 1" },
         { nis: "4353", nama: "Vicky Ary Senno", status: "LULUS", kelas: "XII - 1" },
         { nis: "4355", nama: "Vio Afgan Wirata", status: "LULUS", kelas: "XII - 1" },
         { nis: "4358", nama: "Wahyu Sakti Priyo Utomo", status: "LULUS", kelas: "XII - 1" },
         { nis: "4282", nama: "Adinda Naysilla Pramuji", status: "LULUS", kelas: "XII - 2" },
         { nis: "4284", nama: "Afifathus Sholeh", status: "LULUS", kelas: "XII - 2" },
         { nis: "4285", nama: "Agil Algifari Yodi Irfianto", status: "LULUS", kelas: "XII - 2" },
         { nis: "4288", nama: "Aisya Putri Maharani", status: "LULUS", kelas: "XII - 2" },
         { nis: "4290", nama: "Aldo Eko Chandra Syahputra", status: "LULUS", kelas: "XII - 2" },
         { nis: "4291", nama: "Aldy Dwi Chandra Syahputra", status: "LULUS", kelas: "XII - 2" },
         { nis: "4292", nama: "Alexsa Rachel Lia", status: "LULUS", kelas: "XII - 2" },
         { nis: "4294", nama: "Ardhi Febriano Alfirdaus", status: "LULUS", kelas: "XII - 2" },
         { nis: "4296", nama: "Aryasatya Arundaya", status: "LULUS", kelas: "XII - 2" },
         { nis: "4297", nama: "Ayu Srianggraini", status: "LULUS", kelas: "XII - 2" },
         { nis: "4298", nama: "Ayunisha Novarella", status: "LULUS", kelas: "XII - 2" },
         { nis: "4301", nama: "Bima Rifqi Mulyono", status: "LULUS", kelas: "XII - 2" },
         { nis: "4302", nama: "Desvia Siti Aisyah", status: "LULUS", kelas: "XII - 2" },
         { nis: "4303", nama: "Devina Gloria Desyanta (K)", status: "LULUS", kelas: "XII - 2" },
         { nis: "4305", nama: "Dimas Nur Wachid", status: "LULUS", kelas: "XII - 2" },
         { nis: "4308", nama: "Erwin Syafar Utomo", status: "LULUS", kelas: "XII - 2" },
         { nis: "4314", nama: "Ghibran Angger Caninggia", status: "LULUS", kelas: "XII - 2" },
         { nis: "4319", nama: "Kamelia Tasya Simanjutak", status: "LULUS", kelas: "XII - 2" },
         { nis: "4323", nama: "M. Adrian Farel Wicaksono", status: "LULUS", kelas: "XII - 2" },
         { nis: "4326", nama: "Moch Farel Firmansyah", status: "LULUS", kelas: "XII - 2" },
         { nis: "4327", nama: "Muhammad Farid Termitzy", status: "LULUS", kelas: "XII - 2" },
         { nis: "4331", nama: "Neva Meylarosa", status: "LULUS", kelas: "XII - 2" },
         { nis: "4334", nama: "Nur Fadilah Istianah", status: "LULUS", kelas: "XII - 2" },
         { nis: "4336", nama: "Pasya Monica Deniarzetty", status: "LULUS", kelas: "XII - 2" },
         { nis: "4337", nama: "Rachel Natasya Putri Adjitya", status: "LULUS", kelas: "XII - 2" },
         { nis: "4339", nama: "Randyka Varizky Putra Susanto", status: "LULUS", kelas: "XII - 2" },
         { nis: "4343", nama: "Rizky Rifaldi", status: "LULUS", kelas: "XII - 2" },
         { nis: "4346", nama: "Salwa Ayu Syafira", status: "LULUS", kelas: "XII - 2" },
         { nis: "4349", nama: "Syifa Azzahra", status: "LULUS", kelas: "XII - 2" },
         { nis: "4351", nama: "Tim Dela Rocha Hidayat", status: "LULUS", kelas: "XII - 2" },
         { nis: "4352", nama: "Titania Aurelia", status: "LULUS", kelas: "XII - 2" },
         { nis: "4354", nama: "Vina Puja Anggraini", status: "LULUS", kelas: "XII - 2" },
         { nis: "4356", nama: "Viola Rewanda Putri", status: "LULUS", kelas: "XII - 2" },
         { nis: "4357", nama: "Wahyu Hidayat", status: "LULUS", kelas: "XII - 2" },
         { nis: "4359", nama: "Yeisha Safira Putri Arifin", status: "LULUS", kelas: "XII - 2" }
      ];

      // Fungsi untuk mencari data siswa berdasarkan NIS
      function findSiswaByNIS(nis) {
         return siswaData.find(siswa => siswa.nis === nis);
      }

      // Fungsi untuk menampilkan hasil pencarian
      function showResult(siswa) {
         document.getElementById('resultNis').textContent = siswa.nis;
         document.getElementById('resultNama').textContent = siswa.nama;
         document.getElementById('resultKelas').textContent = siswa.kelas;
         document.getElementById('resultStatus').textContent = siswa.status;
         
         document.getElementById('resultContainer').classList.remove('hidden');
         document.getElementById('notFoundMessage').classList.add('hidden');
         
         if (siswa.status === "LULUS") {
               document.getElementById('resultStatus').classList.add('text-green-600');
               document.getElementById('resultStatus').classList.remove('text-red-600');
               document.getElementById('congratsMessage').classList.remove('hidden');
               document.getElementById('failMessage').classList.add('hidden');
               createConfetti();
         } else {
               document.getElementById('resultStatus').classList.add('text-red-600');
               document.getElementById('resultStatus').classList.remove('text-green-600');
               document.getElementById('congratsMessage').classList.add('hidden');
               document.getElementById('failMessage').classList.remove('hidden');
         }
      }

      // Fungsi untuk menampilkan pesan tidak ditemukan
      function showNotFound() {
         document.getElementById('resultContainer').classList.add('hidden');
         document.getElementById('notFoundMessage').classList.remove('hidden');
      }

      // Fungsi untuk membuat efek confetti
      function createConfetti() {
         const container = document.querySelector('.confetti-container');
         container.innerHTML = '';
         
         const colors = ['#f44336', '#2196f3', '#ffeb3b', '#4caf50', '#9c27b0'];
         
         for (let i = 0; i < 50; i++) {
               const confetti = document.createElement('div');
               confetti.classList.add('confetti');
               confetti.style.left = Math.random() * 100 + 'vw';
               confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
               confetti.style.animationDelay = Math.random() * 3 + 's';
               container.appendChild(confetti);
         }
      }

      // Event listener untuk tombol cek
      document.getElementById('checkButton').addEventListener('click', function() {
         const nis = document.getElementById('nisInput').value.trim();
         if (nis) {
               const siswa = findSiswaByNIS(nis);
               if (siswa) {
                  showResult(siswa);
               } else {
                  showNotFound();
               }
         } else {
               alert('Silakan masukkan NIS terlebih dahulu');
         }
      });

      // Event listener untuk tombol cek siswa lain
      document.getElementById('checkAnotherButton').addEventListener('click', function() {
         document.getElementById('resultContainer').classList.add('hidden');
         document.getElementById('nisInput').value = '';
         document.getElementById('nisInput').focus();
      });

      // Event listener untuk input NIS dengan tombol Enter
      document.getElementById('nisInput').addEventListener('keypress', function(e) {
         if (e.key === 'Enter') {
               document.getElementById('checkButton').click();
         }
      });

      (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'93ae32f5b4d4f922',t:'MTc0NjQyNjczMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
