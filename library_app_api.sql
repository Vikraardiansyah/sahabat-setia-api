-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Jul 2020 pada 21.15
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_app_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `author`
--

INSERT INTO `author` (`id`, `author`) VALUES
(1, 'Tere Liye'),
(2, 'JK Rowling'),
(5, 'Gita Savitri Devi'),
(6, 'Mark Manson'),
(34, 'Agatha Christie'),
(36, 'Aoyama Gosho'),
(37, 'JRR Tolkien'),
(38, 'Koyoharu Gotouge');

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `id_genre` int(11) NOT NULL,
  `id_author` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `email_borrow` varchar(255) NOT NULL,
  `recommended` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `id_genre`, `id_author`, `id_status`, `image`, `email_borrow`, `recommended`, `created_at`, `updated_at`) VALUES
(10, 'Ceros dan Batozar', 'Awalnya kami hanya mengikuti karyawisata biasa seperti murid-murid sekolah lain. Hingga Ali, dengan kegeniusan dan keisengannya, memutuskan menyelidiki sebuah ruangan kuno. Kami tiba di bagian dunia paralel lainnya, menemui petarung kuat, mendapat kekuatan baru serta teknik-teknik menakjubkan.\n\nDunia paralel ternyata sangat luas, dengan begitu banyak orang hebat di dalamnya. Kisah ini tentang petualangan tiga sahabat. Raib bisa menghilang. Seli bisa mengeluarkan petir. Dan Ali bisa melakukan apa saja. CEROS DAN BATOZAR adalah buku ke-4,5 dari serial BUMI', 1, 1, 1, 'image-1591176182339.jpg', '', 0, '2020-06-03 09:23:02', '2020-06-09 17:08:48'),
(11, 'Komet', 'Setelah “musuh besar” kami lolos, dunia paralel dalam situasi genting. Hanya soal waktu, pertempuran besar akan terjadi. Bagaimana jika ribuan petarung yang bisa menghilang, mengeluarkan petir, termasuk teknologi maju lainnya muncul di permukaan Bumi? Tidak ada yang bisa membayangkan kekacauan yang akan terjadi. Situasi menjadi lebih rumit lagi saat Ali, pada detik terakhir, melompat ke portal menuju Klan Komet. Kami bertiga tersesat di klan asing untuk mencari pusaka paling hebat di dunia paralel.\n\nBuku ini berkisah tentang petualangan tiga sahabat. Raib bisa menghilang. Seli bisa mengeluarkan petir. Dan Ali bisa melakukan apa saja. Buku ini juga berkisah tentang persahabatan yang mengharukan, pengorbanan yang tulus, keberanian, dan selalu berbuat baik. Karena sejatinya, itulah kekuatan terbesar di dunia paralel.', 1, 1, 1, 'image-1591176395038.jpg', '', 1, '2020-06-03 09:26:35', '2020-06-14 08:11:40'),
(13, 'Bulan', 'Setelah Serial pertamanya, Bumi, sukses melejit, kini Tere Liye menghadirkan kisah lanjutannya dengan Bulan.\n\nKini anak istimewa itu bernama Seli, masih 15 tahun. Sama halnya seperti remaja yang lain, Seli mendengarkan lagu-lagu yang sedang hits, pergi ke gerai fast food, menonton serial drama dan film. Perbedaannya, Seli bisa mengeluarkan petir.\n\n\nDan dengan kekuatan itu, Seli bertualang menuju tempat-tempat yang menakjubkan bersama Raib.\n\nDengan bekal hewan tunggangan empat ekor harimau salju sebagai kendaraan mereka selama festival, mereka menghadapi medan berbahaya dan binatang buas dalam hutan hutan yang siap menyerang mereka. Namun, mengapa harus mereka yang mengikuti festival berbahaya ini?', 1, 1, 1, 'image-1591176508195.jpg', '', 0, '2020-06-03 09:28:28', '2020-06-14 08:34:06'),
(14, 'Matahari', 'Namanya Ali, 15 tahun, kelas X. Jika saja orangtuanya mengizinkan, seharusnya dia sudah duduk di tingkat akhir ilmu fisika program doktor di universitas ternama. Ali tidak menyukai sekolahnya, guru-gurunya, teman-teman sekelasnya. Semua membosankan baginya.\n\nTapi sejak dia mengetahui ada yang aneh pada diriku dan Seli, teman sekelasnya, hidupnya yang membosankan berubah seru. Aku bisa menghilang, dan Seli bisa mengeluarkan petir.\n\nAli sendiri punya rahasia kecil. Dia bisa berubah menjadi beruang raksasa. Kami bertiga kemudian bertualang ke tempat-tempat menakjubkan.\n\nNamanya Ali. Dia tahu sejak dulu dunia ini tidak sesederhana yang dilihat orang. Dan di atas segalanya, dia akhirnya tahu persahabatan adalah hal yang paling utama.', 1, 1, 1, 'image-1591176604571.jpg', '', 0, '2020-06-03 09:30:04', '2020-06-14 07:28:20'),
(15, 'Bumi', 'Tere Liye kembali mengkreasikan imajinasinya kedalam kedalam beberapa rangkaian novel.\n\n\nBumi, merupakan rangkaian awal dari kisah sekelompok anak remaja berkemampuan istimewa. Mereka yang istimewa, mampu pergi ke dunia pararel bumi, bertemu dengan klan lain dan berhadapan dengan Tamus yang memiliki ambisi membebaskan si Tanpa Mahkota dan kemudian, menguasai bumi.\n\n\nPerkenalkan, Raib, seorang gadis belia berusia lima belas tahun yang tidak biasa. Dia bisa menghilang. Jangan beritahu siapapun, Itu adalah rahasia terbesar yang tak pernah ia ceritakan pada siapapun, termasuk kedua orangtuanya.\nKehidupannya tetap berjalan normal, meskipun untuk dirinya sendiri. tidak jarang Raib menjahili orangtuanya dengan tiba-tiba menghilang, lalu muncul kembali secara tiba-tiba membuat kaget kedua orangtuanya.\n\n\nTere Liye memberikan banyak kejutan ditiap halaman yang direpresentasikan oleh Raib, membuat pembaca dapat menikmati cerita yang seolah tidak akan ada habisnya. Tere Liye berhasil meracik buku ini sebagai bahan baca para pecinta novel sastra maupun fantasi.', 1, 1, 1, 'image-1591176633505.jpg', '', 0, '2020-06-03 09:30:33', '2020-06-14 16:09:00'),
(17, 'A Cup Of Tea', '“Mulut lo nggak sesuai sama jilbab lo.“\n“Sekolah di Jerman tapi akhlaknya nol.“\n“Bad influencer! Di mana manner lo?!“\n“Halah banyak bacot lo. Dasar attention seeker!“\n“Lo nggak dididik dengan benar sama orang tua lo.“\n\nKita nggak butuh pisau untuk membunuh seseorang. Kata-kata yang ditujukan ke gue itu tentu bikin gue down. Semuanya ingin gue hilangkan dari ingatan, tapi nggak pernah berhasil. Nggak mengacuhkan omongan orang lain ternyata nggak mudah. Gue udah coba segala cara; self healing, curhat ke teman, curhat ke psikolog, semuanya. Namun, sampai sekarang kejadian itu masih terasa fresh di otak, seakan-akan baru kemarin menimpa gue.\n\nCyber bullying ini salah satu yang gue ceritakan di A Cup of Tea. Selain itu, gue menuliskan tentang perpisahan yang gue lewati, perjalanan yang mengubah diri, kehidupan setelah pernikahan, hingga kebahagiaan yang gue cari. Lewat buku ini gue berharap kita mendapat kekuatan untuk terus jalan, dan mencari untuk menemukan. “We are a fighter. Don’t let other people say otherwise.”', 5, 5, 1, 'image-1591176924289.jpeg', '', 1, '2020-06-03 09:35:24', '2020-06-14 16:47:28'),
(19, 'Komet Minor', 'Pertarungan melawan si Tanpa Mahkota akan berakhir di sini. Siapa pun yang menang, semua berakhir di sini, di Klan Komet Minor, tempat aliansi para pemburu pernah dibentuk, dan pusaka hebat pernah diciptakan. Dalam saga terakhir melawan si Tanpa Mahkota, aku, Seli, dan Ali menemukan teman seperjalanan yang hebat. Bersama-sama kami melewati berbagai rintangan, memahami banyak hal, berlatih teknik baru, dan bertarung bersama-sama. Inilah kisah kami. Tentang persahabatan sejati. Tentang pengorbanan. Tentang ambisi. Tentang memaafkan. Namaku Raib, dan aku bisa menghilang.', 1, 1, 1, 'image-1592151852340.jpg', '', 0, '2020-06-14 16:24:12', '2020-06-30 15:30:16'),
(20, 'Harry Potter dan Batu Bertuah', '\"Seumur hidup, Harry Potter tidak pernah berurusan dengan sihir. Dia tinggal bersama keluarga Dursley yang kejam dan Dudley, putra mereka yang menyebalkan. Kamar Harry cuma lemari sempit di kolong tangga, dan selama sebelas tahun, ulang tahunnya tak pernah dirayakan.\n\n\n\nNamun, tiba-tiba datang burung hantu membawa surat misterius: surat berisi undangan ke tempat menakjubkan bernama Sekolah Sihir Hogwarts. Dan di sana bukan hanya ada banyak teman, pertandingan olahraga naik sapu terbang, dan sihir dalam segala hal—dari pelajaran sampai makanan— tapi juga ada takdir luar biasa yang sudah lama menantinya... Jika Harry mampu bertahan hidup.\"', 6, 2, 1, 'image-1592152099014.jpg', '', 0, '2020-06-14 16:28:19', '2020-06-14 16:28:19'),
(21, 'Harry Potter dan Tawanan Azkaban', 'Ketika Bus Ksatria membelah kegelapan malam dan berhenti mendadak di hadapan Harry Potter, maka dimulailah tahun ajaran berikutnya di Hogwarts yang jauh dari biasa-biasa saja.\nSirius Black, pembunuh massal dan pengikut Lord Voldemort, kabur dari penjara Azkaban— dan konon dia memburu Harry.\nPada pelajaran Ramalan pertama, Profesor Trelawney melihat terawangan kematian dalam ampas teh anak itu...\nNamun, tak ada yang lebih menakutkan daripada para Dementor, sosok-sosok pengisap jiwa, yang gentayangan di sekeliling sekolah.', 6, 2, 1, 'image-1592152230741.jpg', '', 0, '2020-06-14 16:30:30', '2020-06-14 16:30:30'),
(22, 'Harry Potter dan Orde Phoenix', 'Masa kegelapan menyelubungi Hogwarts. Setelah Dementor menyerang sepupunya, Dudley, Harry Potter tahu Voldemort akan melakukan segala cara untuk menemukannya. Banyak yang tidak percaya bahwa sang Pangeran Kegelapan telah kembali, tapi Harry tidak sendirian: di Grimmauld Place berkumpul orde rahasia untuk melawan kekuatan gelap.\nHarry harus mengizinkan Profesor Snape mengajarinya cara melindungi diri dari rentetan serangan brutal Voldemort dari benaknya. Namun, serangan-serangan itu makin ganas dan Harry kehabisan waktu...', 6, 2, 1, 'image-1592152299135.jpg', '', 0, '2020-06-14 16:31:39', '2020-06-14 16:31:39'),
(23, 'Harry Potter dan Pangeran Berdarah Campuran', 'Ketika pada suatu malam musim panas Dumbledore tiba di Privet Drive untuk menjemput Harry Potter, tangannya yang memegang tongkat sihir tampak menghitam dan mengerut, namun dia tidak menceritakan penyebabnya. Rahasia dan kecurigaan menyebar di dunia sihir, dan Hogwarts sendiri tidak aman. Harry yakin Malfoy memiliki Tanda Kegelapan: ada Pelahap Maut di antara mereka. Harry akan membutuhkan sihir kuat dan teman-teman sejati saat dia menyelidiki rahasia-rahasia terkelam Voldemort, dan Dumbledore mempersiapkannya untuk menghadapi takdir...', 6, 2, 1, 'image-1592152375396.jpg', '', 1, '2020-06-14 16:32:55', '2020-06-14 16:47:54'),
(24, 'Sebuah Seni Untuk Bersikap Bodo Amat', '\"Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer—telah membantu mengoreksi harapan-harapan delusional kita, baik mengenai diri kita sendiri maupun dunia. Ia kini menuangkan buah pikirnya yang keren itu di dalam buku hebat ini.\n“Dalam hidup ini, kita hanya punya kepedulian dalam jumlah yang terbatas. Makanya, Anda harus bijaksana dalam menentukan kepedulian Anda.” Manson menciptakan momen perbincangan yang serius dan mendalam, dibungkus dengan cerita-cerita yang menghibur dan “kekinian”, serta humor yang cadas. Buku ini merupakan tamparan di wajah yang menyegarkan untuk kita semua, supaya kita bisa mulai menjalani kehidupan yang lebih memuaskan, dan apa adanya.', 5, 6, 1, 'image-1592152608871.jpg', '', 1, '2020-06-14 16:36:48', '2020-07-03 08:20:46'),
(25, 'Tirai', 'Lima pembunuhan di tempat yang berbeda dengan motif yang berbeda! Hanya satu persamaan: X. X terlibat dalam kelima pembunuhan itu dan berada di sekitar lima tempat pembunuhannya terjadi. X-lah otak kelima pembunuhan itu. Tapi dengan liciknya dia berhasil menghindari hukum, menghindari kecurigaan orang. Kelima pembunuhan itu begitu sempurna! Sekarang X berada di Styles. Berarti tak lama lagi akan ada pembunuhan di Styles.', 8, 34, 1, 'image-1592152769875.jpg', '', 0, '2020-06-14 16:39:29', '2020-07-03 07:24:52'),
(27, 'Demon Slayer 01', 'Pada zaman Taisho di Jepang, hiduplah Tanjiro Kamado,seorang anak laki-laki berhati lembut yang hidup dari menjual arang. Namun, kehidupan damainya tiba-tiba hancur saat iblis membantai seluruh keluarganya. Hanya Nezuko, salah satu adik perempuannya, yang bertahan hidup. Masalahnya, Nezuko pun berubah menjadi iblis! Demi mengembalikan Nezuko menjadi manusia dan membalaskan dendam keluarganya, Tanjiro bertekad untuk menekuni jalan sebagai seorang pembasmi iblis...!!', 10, 35, 1, 'image-1592152993868.jpg', '', 0, '2020-06-14 16:43:13', '2020-06-14 16:43:13'),
(28, 'Detektif Conan 96', 'Pertama kalinya Heiji Hattori berhadapan dengan si Kid Pencuri yang mengincar \"Fairy Lip\". Di kasus lain Makoto Kyogoku terlibat dalam insiden di lokasi syuting TV drama? Selanjutnya ada informasi baru terkuaknya bos Organisasi Baju Hitam!!', 10, 36, 2, 'image-1592153113116.jpg', 'vikra@gmail.com', 1, '2020-06-14 16:45:13', '2020-07-03 15:47:55'),
(30, 'Kimetsu No Yaiba 01', 'Pada zaman Taisho di Jepang, hiduplah Tanjiro Kamado,seorang anak laki-laki berhati lembut yang hidup dari menjual arang. Namun, kehidupan damainya tiba-tiba hancur saat iblis membantai seluruh keluarganya. Hanya Nezuko, salah satu adik perempuannya, yang bertahan hidup. Masalahnya, Nezuko pun berubah menjadi iblis! Demi mengembalikan Nezuko menjadi manusia dan membalaskan dendam keluarganya, Tanjiro bertekad untuk menekuni jalan sebagai seorang pembasmi iblis!', 10, 38, 1, 'image-1593803271753.jpg', '', 0, '2020-07-03 19:07:51', '2020-07-03 19:07:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `borrow`
--

CREATE TABLE `borrow` (
  `id` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `borrow_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `return_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `borrow`
--

INSERT INTO `borrow` (`id`, `id_book`, `id_user`, `status`, `borrow_at`, `return_at`) VALUES
(69, 25, 12, 1, '2020-06-15 03:01:05', '2020-06-15 03:01:24'),
(70, 26, 12, 2, '2020-06-15 03:01:37', '2020-06-15 03:01:37'),
(71, 19, 13, 1, '2020-06-30 15:30:13', '2020-06-30 15:30:16'),
(72, 28, 13, 1, '2020-07-01 10:20:05', '2020-07-01 10:20:18'),
(73, 12, 14, 1, '2020-07-01 16:12:09', '2020-07-01 16:15:18'),
(74, 24, 14, 1, '2020-07-01 16:12:23', '2020-07-03 06:40:39'),
(75, 24, 14, 1, '2020-07-03 06:40:47', '2020-07-03 08:20:46'),
(76, 28, 14, 2, '2020-07-03 08:12:35', '2020-07-03 08:12:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `genre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `genre`
--

INSERT INTO `genre` (`id`, `genre`) VALUES
(1, 'Fiction'),
(5, 'Non-Fi'),
(6, 'Sci-Fi'),
(8, 'Mystery'),
(10, 'Comic');

-- --------------------------------------------------------

--
-- Struktur dari tabel `order_book`
--

CREATE TABLE `order_book` (
  `id` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `order_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `order_book`
--

INSERT INTO `order_book` (`id`, `id_book`, `id_user`, `order_at`) VALUES
(10, 26, 13, '2020-06-15 03:03:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `status`
--

INSERT INTO `status` (`id`, `status`) VALUES
(1, 'Available'),
(2, 'Unavailable');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Admin', 'admin@admin.com', '$2b$10$f6Jd.mmMRdzOw3ZCfrvKD.HDpMzq/rfhDMEkydTg50bkL55FSy0Mm', 1),
(12, 'VIkra', 'user@user.com', '$2b$10$MkkFTKMtheMq0SQNGJvNl.Z058jWbmf5OACikT.3gZh9wdF7Nd1xq', 2),
(13, 'Vikra2', 'user2@user.com', '$2b$10$m2qTobSzgOh/CBd5wDuU2.26wXUwiYjN7/.o6zqIrQyrcyoUo1aUu', 2),
(14, 'Vikra Ardiansyah', 'vikra@gmail.com', '$2b$10$qVrHyw2FDyuoNaFVxjkzw..SYYjt9yFHOF7d6Bv0EEOrSAwaNZyUa', 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `borrow`
--
ALTER TABLE `borrow`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `order_book`
--
ALTER TABLE `order_book`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `borrow`
--
ALTER TABLE `borrow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT untuk tabel `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `order_book`
--
ALTER TABLE `order_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
