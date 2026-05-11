document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // 0. LANGUAGE DATA & CONFIG
    // ============================================================
    const translations = {
        id: {
            nav_home: "Beranda", nav_exp: "Pengalaman", nav_proj: "Proyek", nav_skill: "Keahlian", nav_cert: "Sertifikat", nav_contact: "Kontak",
            hero_title: "Portfolio Profesional", hero_subtitle: "Hiu Kencana Widhi", hero_loc: "Sidoarjo, Jawa Timur",
            btn_email: "Email Saya", btn_wa: "WhatsApp", btn_cv: "Unduh CV",
            click_detail: "Klik untuk detail lebih lanjut",
            modal_about_exp: "Pengalaman", modal_about_cert: "Sertifikat",
            contact_modal_sub: "Pilih cara terbaik untuk menghubungi saya",
            contact_wa_sub: "Chat langsung via WhatsApp",
            profile_title: "Profil Profesional", profile_desc: "Mengenal lebih dekat latar belakang dan pendidikan saya.",
            about_title: "Tentang Saya",
            about_p1: "Saya lulusan S1 Teknik Logistik dengan pengalaman administrasi gudang, perancangan tata letak inbound, dan operasional kargo penerbangan. Saya mengelola stok FIFO, menyusun dokumen pengiriman, serta menganalisis tata letak demi mengurangi waktu pencarian. Pengalaman kargo di bandara mempertajam pemahaman akan kecepatan dan ketepatan rantai pasok.",
            about_p2: "Pengalaman instalasi jaringan fiber optik melengkapi perspektif integratif antara operasional fisik dan digital. Saya menguasai rantai pasok end-to-end, pengendalian persediaan berbasis data, serta perangkat Excel, SketchUp, dan PowerPoint. Didukung sertifikasi data science, big data, cloud, dan Bahasa Inggris profesional, saya siap mendukung eksekusi logistik presisi di era transformasi digital.",
            focus_title: "Fokus Utama",
            edu_title: "Riwayat Pendidikan", edu_s1: "S1 — Teknik Logistik", edu_smk: "Teknik Komputer & Jaringan", edu_smp: "Sekolah Menengah Pertama",
            edu_iticm: "Institut Teknologi Insan Cendekia Mandiri", edu_smk_name: "SMK Muhammadiyah Kajen", edu_smp_name: "SMP N 1 Kesesi",
            edu_iticm_desc: "Fokus pada Rekayasa Logistik, Supply Chain Management, dan Analisis Distribusi. Lulus dengan predikat sangat memuaskan.",
            edu_smk_desc: "Mempelajari infrastruktur jaringan, perakitan komputer, dan administrasi server.",
            edu_smp_desc: "Pendidikan menengah pertama dengan fokus pada pengembangan akademik dasar.",
            loc_sidoarjo: "Sidoarjo, Jawa Timur", loc_pekalongan: "Pekalongan, Jawa Tengah", loc_batang: "Batang, Jawa Tengah", loc_juanda: "Bandara Juanda, Surabaya, Jawa Timur",
            exp_page_title: "Pengalaman Kerja & Magang", exp_page_desc: "Perjalanan karier dan pengalaman praktis di lapangan.",
            exp_admin_title: "Admin Gudang Bahan Baku", exp_admin_comp: "PT. Bismillah Bisnis Barokah",
            exp_admin_l1: "Memastikan kesesuaian stok fisik dengan pencatatan di sistem.", exp_admin_l2: "Membuat dan mengelola dokumen surat jalan.", exp_admin_l3: "Menerapkan manajemen penyimpanan metode FIFO.", exp_admin_l4: "Proses pengiriman barang ke pihak logistik/klien secara akurat.",
            exp_cargo_title: "Operasional Lapangan (Magang)", exp_cargo_comp: "PT. Dian Mega Kurnia",
            exp_cargo_l1: "Administrasi pengiriman & dokumen kargo.", exp_cargo_l2: "Optimasi penataan barang kargo di gudang.", exp_cargo_l3: "Instalasi perangkat WiFi operasional.",
            exp_telkom_title: "Teknisi Lapangan (Magang)", exp_telkom_comp: "PT. Telkom Indonesia",
            exp_telkom_l1: "Instalasi & aktivasi layanan IndiHome.", exp_telkom_l2: "Analisis & penanganan gangguan internet.",
            exp_wifi_title: "Instalasi WiFi (Freelance)", exp_wifi_l1: "Pemasangan, konfigurasi, dan troubleshooting perangkat jaringan internet mandiri untuk klien.",
            proj_page_title: "Proyek Unggulan", proj_page_desc: "Portofolio karya dan proyek yang pernah saya kerjakan.",
            proj_sec_web: "Sistem & Web Development",
            proj_sec_web_desc: "Pengembangan aplikasi berbasis web untuk digitalisasi bisnis.",
            proj_sec_log: "Logistik & Teknik Industri",
            proj_sec_log_desc: "Implementasi metode industri untuk optimasi operasional.",
            proj_ta_cat: "Tugas Akhir / Skripsi", proj_web_cat: "Aplikasi Web", proj_sys_cat: "Pengembangan Sistem",
            proj_ta_title: "Optimasi Area Inbound PT. Dian Mega Kurnia",
            proj_ta_desc: "Redesain tata letak kargo menggunakan metode Systematic Layout Planning (SLP) untuk mereduksi jarak tempuh dan mengeliminasi bottleneck.",
            proj_wms_title: "Warehouse Management System (WMS)",
            proj_wms_desc: "Aplikasi WMS berbasis web untuk mengelola alur barang masuk, barang keluar, stok, rak penyimpanan, dan laporan operasional dalam satu dashboard.",
            proj_fin_title: "Sistem Pencatatan Keuangan",
            proj_fin_desc: "Aplikasi manajemen keuangan berbasis web untuk memonitoring arus kas, melacak pemasukan, dan mengkategorikan pengeluaran operasional secara efisien.",
            proj_wms_features: "Memiliki modul inbound, outbound, master barang, master rak, manajemen user, monitoring stok, laporan grafik, dan asisten AI.",
            proj_fin_features: "Dilengkapi autentikasi aman, dashboard rekapitulasi interaktif, dan pencatatan riwayat transaksi real-time.",
            proj_stock_title: "Management Stock Konter",
            proj_stock_desc: "Sistem manajemen stok khusus untuk retail konter pulsa dan handphone, mengelola inventaris produk, transaksi penjualan, dan laporan keuangan harian.",
            proj_stock_features: "Fitur mencakup manajemen produk, kategori, transaksi penjualan, riwayat transaksi, dan laporan laba rugi.",
            tag_inbound: "Analisis Inbound", tag_slp: "Metode SLP", tag_data_analysis: "Analisis Data",
            tag_wms_in: "Barang Masuk", tag_wms_out: "Barang Keluar", tag_stock_mon: "Monitoring Stok",
            tag_report: "Laporan & Grafik", tag_ai: "AI Assistant",
            tag_cashflow: "Arus Kas", tag_transaction: "Manajemen Transaksi", tag_auth: "Secure Auth",
            tag_stock_prod: "Stok Produk", tag_basic_trans: "Transaksi", tag_pl_report: "Laporan Laba Rugi", tag_category: "Kategori",
            tag_sketchup: "SketchUp", tag_slp_method: "Metode SLP",
            skill_page_title: "Software & Tools", skill_page_desc: "Perangkat lunak dan teknologi yang saya kuasai.",
            skill_office_title: "Office & Productivity", skill_web_title: "Web Development",
            skill_data_title: "Data & Analysis", skill_net_title: "Networking & AI",
            skill_office_desc: "Penguasaan mendalam dalam administrasi data dan penyusunan laporan menggunakan ekosistem Microsoft dan Google.",
            skill_web_desc: "Mampu membangun aplikasi web responsif, merancang UI/UX modern, dan mengelola database relasional.",
            skill_data_desc: "Pengolahan data statistik, uji validitas & reliabilitas, serta pemodelan SEM untuk riset.",
            skill_net_desc: "Instalasi perangkat keras jaringan, konfigurasi router, dan pemanfaatan AI untuk problem solving.",
            skill_log_title: "Logistics & Supply Chain",
            skill_log_p_desc: "Kemampuan teknis dan pemahaman mendalam dalam rantai pasok industri.",
            skill_soft_title: "Soft Skills & Management",
            skill_soft_p_desc: "Atribut personal yang mendukung efektivitas kerja dalam tim.",
            skill_scm_title: "Manajemen Rantai Pasok",
            skill_scm_desc: "Memahami End-to-End Coordination, Risk Mitigation, dan Supplier Relationship Management.",
            skill_wh_title: "Operasional Pergudangan",
            skill_wh_desc: "Memahami Layout Optimization dan Standard Operating Procedure (SOP) pergudangan.",
            skill_dist_title: "Distribusi Logistik",
            skill_dist_desc: "Memahami Route Optimization, Fleet Management, dan Distribution Network.",
            skill_inv_title: "Pengendalian Persediaan",
            skill_inv_desc: "Memahami Demand Forecasting dan Optimization Methods untuk stok barang.",
            skill_time_title: "Manajemen Waktu",
            skill_time_desc: "Mampu mengatur prioritas tugas dengan efisien untuk memenuhi tenggat waktu yang ketat.",
            skill_comm_title: "Komunikasi & Kolaborasi",
            skill_comm_desc: "Keahlian dalam berkoordinasi antar divisi dan bekerja sama dalam tim lintas fungsi.",
            skill_solve_title: "Problem Solving",
            skill_solve_desc: "Kemampuan analisis kritis dalam menangani bottleneck operasional dan memberikan solusi inovatif.",
            skill_log_coordination: "Koordinasi End-to-End",
            skill_log_risk: "Mitigasi Risiko",
            skill_log_supplier: "Manajemen Supplier",
            skill_log_layout: "Optimasi Tata Letak",
            skill_log_sop: "Prosedur Operasional Standar",
            skill_log_route: "Optimasi Rute",
            skill_log_fleet: "Manajemen Armada",
            skill_log_forecast: "Peramalan Permintaan",
            skill_log_opt: "Metode Optimasi",
            skill_log_stok: "Analisis Stok",
            skill_soft_priority: "Prioritas Tugas",
            skill_soft_deadline: "Manajemen Tenggat Waktu",
            skill_soft_efficiency: "Efisiensi Kerja",
            skill_soft_coord: "Koordinasi Divisi",
            skill_soft_team: "Kerjasama Tim",
            skill_soft_bottleneck: "Analisis Bottleneck",
            skill_soft_critical: "Berpikir Kritis",
            skill_soft_innovation: "Solusi Inovatif",
            skill_soft_rca: "Analisis Akar Masalah",
            skill_it_title: "IT Infrastructure & Networking",
            skill_it_page_desc: "Keahlian teknis dalam membangun dan mengelola infrastruktur teknologi informasi.",
            skill_net_inst_title: "Instalasi Jaringan",
            skill_net_inst_desc: "Pemasangan dan pengorganisasian infrastruktur jaringan fisik seperti perkabelan LAN dan perangkat server.",
            skill_net_conf_title: "Konfigurasi Perangkat",
            skill_net_conf_desc: "Setting dan optimasi perangkat jaringan seperti Router, Switch, dan Access Point (Mikrotik/Cisco).",
            skill_net_maint_title: "Maintenance & Troubleshooting",
            skill_net_maint_desc: "Pemantauan rutin dan penanganan cepat terhadap gangguan konektivitas jaringan.",
            skill_it_support_title: "IT Technical Support",
            skill_it_support_desc: "Pemeliharaan perangkat keras komputer dan bantuan teknis operasional sistem.",
            skill_it_lan: "Setup LAN/WAN",
            skill_it_mikrotik: "Konfigurasi Mikrotik",
            skill_it_cisco: "Cisco Networking",
            skill_it_trouble: "Troubleshooting Jaringan",
            skill_it_hardware: "Pemeliharaan Hardware",
            skill_it_server: "Administrasi Server",
            cert_page_title: "Sertifikat & Pelatihan", cert_page_desc: "Pencapaian dan sertifikasi profesional yang saya miliki.",
            cert_excel: "Pelatihan Excel", cert_excel_desc: "Sertifikat pelatihan Microsoft Excel yang telah saya selesaikan.",
            cert_online: "Pelatihan Online", cert_online_desc: "Kursus dan pelatihan daring yang telah saya selesaikan.",
            cert_seminar: "Seminar & Kepanitiaan", cert_seminar_desc: "Partisipasi aktif dalam seminar dan kegiatan organisasi.",
            cert_committee: "Sertifikat Kepanitiaan", cert_participant: "Sertifikat Peserta",
            cert_cat_1: "Microsoft Office & Produktivitas", cert_cat_1_desc: "Sertifikat keahlian dalam menggunakan perangkat lunak produktivitas Microsoft.",
            cert_cat_2: "Data Science, Analitik & Statistik", cert_cat_2_desc: "Sertifikat dalam pengolahan data, analisis statistik, dan visualisasi data.",
            cert_cat_3: "AI & Prompt Engineering", cert_cat_3_desc: "Sertifikat pemanfaatan kecerdasan buatan dan teknik prompt engineering.",
            cert_cat_4: "Cloud Computing", cert_cat_4_desc: "Sertifikat dasar-dasar komputasi awan dan infrastruktur cloud.",
            cert_cat_5: "Project & Product Management", cert_cat_5_desc: "Sertifikat manajemen proyek dan pengembangan produk.",
            cert_cat_6: "UI/UX Design", cert_cat_6_desc: "Sertifikat desain antarmuka dan pengalaman pengguna.",
            cert_cat_7: "Bahasa Inggris", cert_cat_7_desc: "Sertifikat kemampuan berbahasa Inggris untuk keperluan profesional.",
            cert_cat_8: "Persiapan Karier & Pengembangan Diri", cert_cat_8_desc: "Sertifikat pelatihan untuk meningkatkan daya saing di dunia kerja.",
            cert_cat_9: "Digital Marketing", cert_cat_9_desc: "Sertifikat strategi pemasaran digital dan manajemen media sosial.",
            cert_cat_10: "Organisasi & Kepemimpinan", cert_cat_10_desc: "Sertifikat peran aktif dan kepemimpinan dalam organisasi.",
            cert_cat_11: "Seminar & Workshop", cert_cat_11_desc: "Sertifikat partisipasi dalam berbagai seminar dan lokakarya profesional.",
            footer_cta_title: "Tertarik bekerja sama? Yuk, ngobrol!",
            footer_cta_desc: "Saya selalu terbuka untuk diskusi mengenai peluang kerja, proyek freelance, atau sekadar bertukar pikiran.",
            footer_status: "Tersedia untuk Freelance & Full-time",
            footer_loc: "Berbasis di Sidoarjo, Indonesia",
            footer_text: "Fresh graduate Teknik Logistik & IT Enthusiast. Menggabungkan efisiensi rantai pasok dengan inovasi teknologi.",
            footer_featured: "Proyek Unggulan", 
            footer_social: "Sosial Media",
            footer_copyright: "© 2026 Hiu Kencana Widhi. Seluruh hak cipta dilindungi.",
            exp_modal_title: "Detail Pengalaman",
            proj_modal_title: "Detail Proyek",
            exp_admin_desc: "Bertanggung jawab penuh atas manajemen inventori bahan baku di gudang. Mengawasi alur masuk dan keluar barang menggunakan sistem pencatatan yang ketat, serta memastikan akurasi stok fisik 100%. Menerapkan standar operasional prosedur (SOP) pergudangan berbasis FIFO.",
            exp_cargo_desc: "Menangani operasional logistik udara di Bandara Juanda. Fokus pada efisiensi penataan kargo di area pergudangan untuk mempercepat proses loading/unloading. Juga bertanggung jawab atas administrasi dokumen kargo dan instalasi infrastruktur WiFi pendukung operasional.",
            exp_telkom_desc: "Melakukan instalasi teknis jaringan serat optik untuk pelanggan baru. Menganalisis masalah gangguan koneksi menggunakan perangkat ukur jaringan dan memberikan solusi perbaikan yang cepat dan tepat sasaran.",
            exp_wifi_desc: "Memberikan layanan konsultasi dan instalasi jaringan nirkabel (WiFi) untuk rumah dan kantor kecil. Mencakup penarikan kabel, konfigurasi router, dan optimasi sinyal jaringan agar merata di seluruh area.",
            contact_page_title: "Hubungi Saya", contact_page_desc: "Mari berdiskusi tentang proyek, peluang kerja, atau kolaborasi lainnya.",
            contact_form_name: "Nama Lengkap", contact_form_email: "Alamat Email", contact_form_subject: "Subjek", contact_form_msg: "Pesan Anda",
            contact_form_btn: "Kirim Pesan", contact_info_title: "Informasi Kontak",
            contact_social_title: "Ikuti Saya", contact_loc_title: "Lokasi",
            nav_org: "Pengalaman Organisasi", org_page_desc: "Kontribusi dan peran aktif saya dalam organisasi dan pengabdian masyarakat.",
            exp_work_title: "Pengalaman Kerja", exp_work_desc: "Daftar riwayat pekerjaan profesional dan proyek freelance.",
            exp_intern_title: "Pengalaman Magang", exp_intern_desc: "Pengalaman praktis di industri selama masa pendidikan.",
            theme_label: "Tampilan Gelap", lang_label: "Bahasa",
            role_log: "Teknik Logistik", role_web: "Web Developer", role_net: "Teknisi Jaringan", role_data: "Analisis Data",
            edu_gpa: "IPK", edu_grade: "Nilai", edu_nem: "NEM",
            proj_demo: "Demo Website", proj_live: "Live Demo",
            contact_email: "Email Saya", contact_wa: "WhatsApp", contact_loc: "Lokasi",
            exp_media_title: "Ketua Divisi Media", exp_media_org: "Himpunan Mahasiswa Teknik Logistik",
            exp_media_l1: "Memimpin tim media dalam pengelolaan platform sosial media dan website organisasi.",
            exp_media_l2: "Mengoordinasi pembuatan konten visual dan publikasi kegiatan himpunan.",
            exp_media_l3: "Merancang strategi komunikasi digital untuk meningkatkan engagement anggota.",
            exp_media_l4: "Bertanggung jawab atas dokumentasi seluruh agenda internal dan eksternal.",
            exp_media_desc: "Sebagai Ketua Divisi Media, saya bertanggung jawab penuh dalam membangun identitas digital Himpunan Mahasiswa Teknik Logistik. Saya mengelola tim kreatif untuk menghasilkan konten yang informatif dan menarik, serta memastikan seluruh informasi kegiatan tersampaikan dengan baik kepada publik dan anggota.",
            exp_kkn_title: "Sekretaris KKN Group 02", exp_kkn_org: "KKN Desa Belor, Kota Kediri",
            exp_kkn_l1: "Mengelola administrasi, surat-menyurat, dan dokumentasi resmi program KKN.",
            exp_kkn_l2: "Menyusun proposal program kerja dan laporan akhir pelaksanaan KKN secara komprehensif.",
            exp_kkn_l3: "Mengoordinasikan jadwal kegiatan dan menjaga komunikasi antara kelompok dengan perangkat desa.",
            exp_kkn_l4: "Mengelola arsip data dan logbook harian seluruh anggota kelompok.",
            exp_kkn_desc: "Peran sebagai Sekretaris KKN menuntut ketelitian dalam manajemen dokumen dan koordinasi tim. Saya memastikan seluruh program kerja terdokumentasi dengan baik, laporan selesai tepat waktu sesuai standar akademik, serta menjaga hubungan administratif yang harmonis dengan perangkat Desa Belor selama masa pengabdian.",
            loc_kediri: "Kediri, Jawa Timur",
            exp_joki_title: "Joki Skripsi & Tugas (Freelance)", exp_joki_comp: "Mandiri / Independen",
            exp_joki_l1: "Memberikan asistensi dalam penyusunan riset ilmiah, tugas akhir, dan analisis data statistik.",
            exp_joki_l2: "Mengolah data penelitian menggunakan tools seperti SPSS, SmartPLS, dan Excel Advanced.",
            exp_joki_l3: "Melakukan pengecekan plagiarisme dan standarisasi format penulisan akademik.",
            exp_joki_l4: "Menyusun kerangka berpikir dan metodologi penelitian yang sistematis bagi klien.",
            exp_joki_desc: "Sebagai penyedia jasa Joki Skripsi dan Tugas, saya membantu mahasiswa dalam menyelesaikan berbagai hambatan akademik. Fokus utama saya adalah memberikan solusi cepat dan akurat dalam pengerjaan riset, pengolahan data statistik, hingga penulisan laporan akhir. Pengalaman ini membuktikan kemampuan saya dalam bekerja di bawah tekanan tinggi dengan tenggat waktu yang sangat ketat.",
            exp_makrab_title: "Koordinator Media Makrab Teklog", exp_makrab_org: "Teknik Logistik ITICM",
            exp_makrab_l1: "Merancang seluruh identitas visual acara mulai dari poster, banner, hingga ID card peserta.",
            exp_makrab_l2: "Memimpin tim dokumentasi dalam pengambilan foto dan video selama acara berlangsung.",
            exp_makrab_l3: "Memproduksi video aftermovie kreatif sebagai arsip dokumentasi kegiatan.",
            exp_makrab_desc: "Sebagai Koordinator Media, saya bertanggung jawab menciptakan atmosfer acara yang berkesan melalui visual. Fokus utama saya adalah memastikan setiap momen penting terdokumentasi dengan estetis dan memproduksi konten publikasi yang meningkatkan antusiasme peserta.",
            exp_sem_title: "Koordinator Media Seminar Transformation Supply Chain", exp_sem_org: "Seminar Nasional Teknik Logistik",
            exp_sem_l1: "Mengelola publikasi digital dan kampanye pendaftaran peserta di media sosial.",
            exp_sem_l2: "Bertanggung jawab atas teknis live streaming dan dukungan presentasi visual pemateri.",
            exp_sem_l3: "Mendesain layout prosiding dan materi publikasi pasca-acara.",
            exp_sem_desc: "Peran ini menuntut manajemen konten yang cepat dan akurat dalam skala seminar nasional. Saya memastikan alur informasi digital berjalan lancar, mulai dari promosi hingga dokumentasi pemateri kunci, guna mendukung keberhasilan transformasi pengetahuan di bidang supply chain."
        },
        en: {
            nav_home: "Home", nav_exp: "Experience", nav_proj: "Projects", nav_skill: "Skills", nav_cert: "Certificates", nav_contact: "Contact",
            hero_title: "Professional Portfolio", hero_subtitle: "Hiu Kencana Widhi", hero_loc: "Sidoarjo, East Java",
            btn_email: "Email Me", btn_wa: "WhatsApp", btn_cv: "Download CV",
            click_detail: "Click for more details",
            modal_about_exp: "Experience", modal_about_cert: "Certificates",
            contact_modal_sub: "Choose the best way to reach me",
            contact_wa_sub: "Chat directly via WhatsApp",
            profile_title: "Professional Profile", profile_desc: "Getting to know my background and education better.",
            about_title: "About Me",
            about_p1: "I am a Logistics Engineering graduate with experience in warehouse administration, inbound layout design, and aviation cargo operations. I manage FIFO inventory, compile shipping documents, and analyze layouts to reduce retrieval times. My cargo experience at the airport has sharpened my understanding of speed and precision in the supply chain.",
            about_p2: "Fiber optic network installation experience completes my integrative perspective between physical and digital operations. I have mastered end-to-end supply chain, data-driven inventory control, and tools such as Excel, SketchUp, and PowerPoint. Supported by certifications in data science, big data, cloud, and professional English, I am ready to support precision logistics execution in the digital transformation era.",
            focus_title: "Main Focus",
            edu_title: "Education History", edu_s1: "Bachelor — Logistics Engineering", edu_smk: "Computer & Network Engineering", edu_smp: "Junior High School",
            edu_iticm: "Insan Cendekia Mandiri Technology Institute", edu_smk_name: "Muhammadiyah Kajen Vocational School", edu_smp_name: "Junior High School 1 Kesesi",
            edu_iticm_desc: "Focus on Logistics Engineering, Supply Chain Management, and Distribution Analysis. Graduated with honors.",
            edu_smk_desc: "Studying network infrastructure, computer assembly, and server administration.",
            edu_smp_desc: "Junior high school education with a focus on basic academic development.",
            loc_sidoarjo: "Sidoarjo, East Java", loc_pekalongan: "Pekalongan, Central Java", loc_batang: "Batang, Central Java", loc_juanda: "Juanda Airport, Surabaya, East Java",
            exp_page_title: "Work & Internship Experience", exp_page_desc: "Career journey and practical field experience.",
            exp_admin_title: "Raw Material Warehouse Admin", exp_admin_comp: "PT. Bismillah Bisnis Barokah",
            exp_admin_l1: "Ensuring consistency between physical stock and system records.", exp_admin_l2: "Creating and managing delivery documents.", exp_admin_l3: "Implementing FIFO (First-In, First-Out) storage management.", exp_admin_l4: "Accurately processing goods shipments to logistics parties/clients.",
            exp_cargo_title: "Field Operations (Internship)", exp_cargo_comp: "PT. Dian Mega Kurnia",
            exp_cargo_l1: "Shipment administration & cargo documentation.", exp_cargo_l2: "Optimizing cargo arrangement in the warehouse.", exp_cargo_l3: "Installing operational WiFi equipment.",
            exp_telkom_title: "Field Technician (Intern)", exp_telkom_comp: "PT. Telkom Indonesia",
            exp_telkom_l1: "Installation & activation of IndiHome services.", exp_telkom_l2: "Analysis & handling of internet disruptions.",
            exp_wifi_title: "WiFi Installation (Freelance)", exp_wifi_l1: "Installation, configuration, and troubleshooting of independent internet network devices for clients.",
            proj_page_title: "Featured Projects", proj_page_desc: "Portfolio of works and projects I have worked on.",
            proj_ta_cat: "Thesis / Final Project", proj_web_cat: "Web Application", proj_sys_cat: "System Development",
            proj_ta_title: "Inbound Area Optimization at PT. Dian Mega Kurnia",
            proj_ta_desc: "Redesigning cargo layout using Systematic Layout Planning (SLP) method to reduce travel distance and eliminate bottlenecks.",
            proj_wms_title: "Warehouse Management System (WMS)",
            proj_wms_desc: "Web-based WMS application to manage inbound, outbound, stock, storage racks, and operational reports in one dashboard.",
            proj_fin_title: "Financial Recording System",
            proj_fin_desc: "Web-based financial management application to monitor cash flow, track income, and categorize operational expenses efficiently.",
            proj_wms_features: "Features modules for inbound, outbound, master items, master racks, user management, stock monitoring, graphical reports, and an AI assistant.",
            proj_fin_features: "Equipped with secure authentication, interactive recapitulation dashboards, and real-time transaction history recording.",
            proj_stock_title: "Counter Stock Management",
            proj_stock_desc: "A dedicated stock management system for pulse and mobile phone retail counters, managing product inventory, sales transactions, and daily financial reports.",
            proj_stock_features: "Features include product management, categories, sales transactions, transaction history, and profit/loss reports.",
            tag_inbound: "Inbound Analysis", tag_slp: "SLP Method", tag_data_analysis: "Data Analysis",
            tag_wms_in: "Inbound Goods", tag_wms_out: "Outbound Goods", tag_stock_mon: "Stock Monitoring",
            tag_report: "Reports & Charts", tag_ai: "AI Assistant",
            tag_cashflow: "Cash Flow", tag_transaction: "Transaction Management", tag_auth: "Secure Auth",
            tag_stock_prod: "Product Stock", tag_basic_trans: "Transactions", tag_pl_report: "Profit & Loss Report", tag_category: "Category",
            tag_sketchup: "SketchUp", tag_slp_method: "SLP Method",
            skill_page_title: "Software & Tools", skill_page_desc: "Software and technologies I have mastered.",
            skill_office_title: "Office & Productivity", skill_web_title: "Web Development",
            skill_data_title: "Data & Analysis", skill_net_title: "Networking & AI",
            skill_office_desc: "Deep mastery in data administration and report preparation using Microsoft and Google ecosystems.",
            skill_web_desc: "Capable of building responsive web applications, designing modern UI/UX, and managing relational databases.",
            skill_data_desc: "Statistical data processing, validity & reliability testing, and SEM modeling for research.",
            skill_net_desc: "Network hardware installation, router configuration, and utilizing AI for problem solving.",
            skill_log_title: "Logistics & Supply Chain",
            skill_log_p_desc: "Technical skills and deep understanding of the industrial supply chain.",
            skill_soft_title: "Soft Skills & Management",
            skill_soft_p_desc: "Personal attributes that support work effectiveness within a team.",
            skill_scm_title: "Supply Chain Management",
            skill_scm_desc: "Understanding End-to-End Coordination, Risk Mitigation, and Supplier Relationship Management.",
            skill_wh_title: "Warehouse Operations",
            skill_wh_desc: "Understanding Layout Optimization and Warehouse Standard Operating Procedures (SOP).",
            skill_dist_title: "Logistics Distribution",
            skill_dist_desc: "Understanding Route Optimization, Fleet Management, and Distribution Networks.",
            skill_inv_title: "Inventory Control",
            skill_inv_desc: "Understanding Demand Forecasting and Optimization Methods for stock management.",
            skill_time_title: "Time Management",
            skill_time_desc: "Ability to efficiently prioritize tasks to meet strict deadlines.",
            skill_comm_title: "Communication & Collaboration",
            skill_comm_desc: "Expertise in cross-divisional coordination and working within multi-functional teams.",
            skill_solve_title: "Problem Solving",
            skill_solve_desc: "Critical analytical skills in handling operational bottlenecks and providing innovative solutions.",
            skill_log_coordination: "End-to-End Coordination",
            skill_log_risk: "Risk Mitigation",
            skill_log_supplier: "Supplier Management",
            skill_log_layout: "Layout Optimization",
            skill_log_sop: "Standard Operating Procedure",
            skill_log_route: "Route Optimization",
            skill_log_fleet: "Fleet Management",
            skill_log_forecast: "Demand Forecasting",
            skill_log_opt: "Optimization Methods",
            skill_log_stok: "Stock Analysis",
            skill_soft_priority: "Task Prioritization",
            skill_soft_deadline: "Deadline Management",
            skill_soft_efficiency: "Work Efficiency",
            skill_soft_coord: "Division Coordination",
            skill_soft_team: "Teamwork",
            skill_soft_bottleneck: "Bottleneck Analysis",
            skill_soft_critical: "Critical Thinking",
            skill_soft_innovation: "Innovative Solutions",
            skill_soft_rca: "Root Cause Analysis",
            skill_it_title: "IT Infrastructure & Networking",
            skill_it_page_desc: "Technical expertise in building and managing information technology infrastructure.",
            skill_net_inst_title: "Network Installation",
            skill_net_inst_desc: "Installing and organizing physical network infrastructure such as LAN cabling and server hardware.",
            skill_net_conf_title: "Device Configuration",
            skill_net_conf_desc: "Setting up and optimizing network devices like Routers, Switches, and Access Points (Mikrotik/Cisco).",
            skill_net_maint_title: "Maintenance & Troubleshooting",
            skill_net_maint_desc: "Regular monitoring and rapid response to network connectivity issues.",
            skill_it_support_title: "IT Technical Support",
            skill_it_support_desc: "Computer hardware maintenance and operational system technical assistance.",
            skill_it_lan: "LAN/WAN Setup",
            skill_it_mikrotik: "Mikrotik Configuration",
            skill_it_cisco: "Cisco Networking",
            skill_it_trouble: "Network Troubleshooting",
            skill_it_hardware: "Hardware Maintenance",
            skill_it_server: "Server Administration",
            cert_page_title: "Certificates & Training", cert_page_desc: "My professional achievements and certifications.",
            cert_excel: "Excel Training", cert_excel_desc: "Microsoft Excel training certificates I have completed.",
            cert_online: "Online Training", cert_online_desc: "Online courses and training programs I have completed.",
            cert_seminar: "Seminars & Committees", cert_seminar_desc: "Active participation in seminars and organizational activities.",
            cert_committee: "Committee Certificate", cert_participant: "Participant Certificate",
            cert_cat_1: "Microsoft Office & Productivity", cert_cat_1_desc: "Certificates of expertise in using Microsoft productivity software.",
            cert_cat_2: "Data Science, Analytics & Statistics", cert_cat_2_desc: "Certificates in data processing, statistical analysis, and data visualization.",
            cert_cat_3: "AI & Prompt Engineering", cert_cat_3_desc: "Certificates in utilizing artificial intelligence and prompt engineering techniques.",
            cert_cat_4: "Cloud Computing", cert_cat_4_desc: "Certificates in cloud computing basics and cloud infrastructure.",
            cert_cat_5: "Project & Product Management", cert_cat_5_desc: "Certificates in project management and product development.",
            cert_cat_6: "UI/UX Design", cert_cat_6_desc: "Certificates in user interface and user experience design.",
            cert_cat_7: "English Language", cert_cat_7_desc: "Certificates in English language proficiency for professional purposes.",
            cert_cat_8: "Career Preparation & Self Development", cert_cat_8_desc: "Training certificates to increase competitiveness in the world of work.",
            cert_cat_9: "Digital Marketing", cert_cat_9_desc: "Certificates in digital marketing strategies and social media management.",
            cert_cat_10: "Organization & Leadership", cert_cat_10_desc: "Certificates of active roles and leadership in organizations.",
            cert_cat_11: "Seminars & Workshops", cert_cat_11_desc: "Certificates of participation in various professional seminars and workshops.",
            footer_cta_title: "Interested in collaborating? Let's talk!",
            footer_cta_desc: "I am always open to discussing job opportunities, freelance projects, or just sharing thoughts.",
            footer_status: "Available for Freelance & Full-time",
            footer_loc: "Based in Sidoarjo, Indonesia",
            footer_text: "Fresh graduate in Logistics Engineering & IT Enthusiast. Combining supply chain efficiency with technological innovation.",
            footer_featured: "Featured Projects", 
            footer_social: "Social Media",
            footer_copyright: "© 2026 Hiu Kencana Widhi. All rights reserved.",
            exp_modal_title: "Experience Details",
            proj_modal_title: "Project Details",
            exp_admin_desc: "Fully responsible for raw material inventory management in the warehouse. Supervising the flow of incoming and outgoing goods using a strict recording system, and ensuring 100% physical stock accuracy. Implementing FIFO-based warehouse operating procedures (SOP).",
            exp_cargo_desc: "Handling air logistics operations at Juanda Airport. Focusing on the efficiency of cargo arrangement in the warehouse area to speed up the loading/unloading process. Also responsible for cargo document administration and installation of WiFi infrastructure supporting operations.",
            exp_telkom_desc: "Performing technical installation of fiber optic networks for new customers. Analyzing connection interference issues using network measurement devices and providing fast and targeted repair solutions.",
            exp_wifi_desc: "Providing wireless network (WiFi) consultation and installation services for homes and small offices. Includes cable pulling, router configuration, and network signal optimization for even coverage throughout the area.",
            contact_page_title: "Get in Touch", contact_page_desc: "Let's discuss projects, job opportunities, or other collaborations.",
            contact_form_name: "Full Name", contact_form_email: "Email Address", contact_form_subject: "Subject", contact_form_msg: "Your Message",
            contact_form_btn: "Send Message", contact_info_title: "Contact Information",
            contact_social_title: "Follow Me", contact_loc_title: "Location",
            nav_org: "Organizational Experience", org_page_desc: "My contributions and active roles in organizations and community service.",
            exp_work_title: "Work Experience", exp_work_desc: "A history of professional work and freelance projects.",
            exp_intern_title: "Internship Experience", exp_intern_desc: "Practical industry experience during the educational period.",
            theme_label: "Dark Mode", lang_label: "Language",
            role_log: "Logistics Engineering", role_web: "Web Developer", role_net: "Network Technician", role_data: "Data Analytics",
            edu_gpa: "GPA", edu_grade: "Grade", edu_nem: "NEM",
            proj_demo: "Demo Website", proj_live: "Live Demo",
            contact_email: "Email Me", contact_wa: "WhatsApp", contact_loc: "Location",
            exp_media_title: "Head of Media Division", exp_media_org: "Logistics Engineering Student Association",
            exp_media_l1: "Leading the media team in managing the organization's social media platforms and website.",
            exp_media_l2: "Coordinating the creation of visual content and publication of association activities.",
            exp_media_l3: "Designing digital communication strategies to increase member engagement.",
            exp_media_l4: "Responsible for documenting all internal and external agendas.",
            exp_media_desc: "As the Head of the Media Division, I was fully responsible for building the digital identity of the Logistics Engineering Student Association. I managed a creative team to produce informative and engaging content, ensuring all activity information was well communicated to the public and members.",
            exp_kkn_title: "Secretary of KKN Group 02", exp_kkn_org: "KKN Belor Village, Kediri City",
            exp_kkn_l1: "Managing administration, correspondence, and official documentation of the KKN program.",
            exp_kkn_l2: "Drafting work program proposals and comprehensive final KKN implementation reports.",
            exp_kkn_l3: "Coordinating activity schedules and maintaining communication between the group and village officials.",
            exp_kkn_l4: "Managing data archives and daily logbooks for all group members.",
            exp_kkn_desc: "The role of KKN Secretary demanded precision in document management and team coordination. I ensured all work programs were well documented, reports were completed on time according to academic standards, and maintained harmonious administrative relationships with Belor Village officials during the service period.",
            loc_kediri: "Kediri, East Java",
            exp_joki_title: "Thesis & Assignment Assistant (Freelance)", exp_joki_comp: "Self-employed / Independent",
            exp_joki_l1: "Providing assistance in drafting scientific research, final projects, and statistical data analysis.",
            exp_joki_l2: "Processing research data using tools such as SPSS, SmartPLS, and Advanced Excel.",
            exp_joki_l3: "Performing plagiarism checks and standardizing academic writing formats.",
            exp_joki_l4: "Designing systematic research frameworks and methodologies for clients.",
            exp_joki_desc: "As a Thesis and Assignment Assistant (Joki Skripsi), I help students overcome various academic hurdles. My primary focus is providing fast and accurate solutions for research, statistical data processing, and final report writing. This experience proves my ability to work under high pressure with very tight deadlines.",
            exp_makrab_title: "Media Coordinator for Makrab Teklog", exp_makrab_org: "Logistics Engineering ITICM",
            exp_makrab_l1: "Designing the entire visual identity of the event from posters, banners, to participant ID cards.",
            exp_makrab_l2: "Leading the documentation team in capturing photos and videos throughout the event.",
            exp_makrab_l3: "Producing a creative aftermovie video as an archive of activity documentation.",
            exp_makrab_desc: "As the Media Coordinator, I was responsible for creating a memorable event atmosphere through visuals. My primary focus was ensuring every important moment was documented aesthetically and producing publication content that increased participant enthusiasm.",
            exp_sem_title: "Media Coordinator for Transformation Supply Chain Seminar", exp_sem_org: "National Seminar on Logistics Engineering",
            exp_sem_l1: "Managing digital publications and participant registration campaigns on social media.",
            exp_sem_l2: "Responsible for live streaming technicalities and visual presentation support for speakers.",
            exp_sem_l3: "Designing the layout for proceedings and post-event publication materials.",
            exp_sem_desc: "This role demanded fast and accurate content management on a national seminar scale. I ensured the digital information flow ran smoothly, from promotion to key speaker documentation, to support the successful transformation of knowledge in the supply chain field."
        }
    };

    let currentLang = localStorage.getItem('language') || 'en';

    // ============================================================
    // 1. LEFT DRAWER — MOBILE NAVIGATION
    // ============================================================
    const drawerEl    = document.getElementById('nav-drawer');
    const backdropEl  = document.getElementById('drawer-backdrop');
    const toggleBtn   = document.querySelector('.navbar-toggler');
    const navbarEl    = document.querySelector('.navbar');

    function openDrawer() {
        if (!drawerEl) return;
        drawerEl.classList.add('open');
        backdropEl.classList.add('show');
        document.body.classList.add('drawer-open');
        if (navbarEl) navbarEl.classList.add('navbar-hidden');
        // Focus trap: focus first link
        const firstLink = drawerEl.querySelector('a, button');
        if (firstLink) firstLink.focus();
    }

    function closeDrawer() {
        if (!drawerEl) return;
        drawerEl.classList.remove('open');
        backdropEl.classList.remove('show');
        document.body.classList.remove('drawer-open');
        if (navbarEl) navbarEl.classList.remove('navbar-hidden');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (drawerEl.classList.contains('open')) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });
    }

    if (backdropEl) {
        backdropEl.addEventListener('click', closeDrawer);
    }

    const closeBtn = document.getElementById('drawer-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) closeDrawer();
    });


    // ============================================================
    // 2. THEME TOGGLE
    // ============================================================
    const body = document.body;

    function applyTheme(isDark) {
        document.querySelectorAll('.theme-icon').forEach(icon => {
            icon.className = 'bi ' + (isDark ? 'bi-sun theme-icon' : 'bi-moon theme-icon');
        });
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            applyTheme(isDark);
        });
    });


    // ============================================================
    // 3. ACTIVE NAV LINK & PAGE TRANSITION
    // ============================================================
    const currentFile = location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const linkFile = href.split('/').pop();
        if (linkFile === currentFile) {
            link.classList.add('active');
        }

        // Transition Logic
        const isExternal = href.startsWith('http') || href.startsWith('//');
        const isAnchor   = href.startsWith('#');
        const isSpecial  = href.startsWith('mailto') || href.startsWith('tel');
        const isFile     = /\.(pdf|zip|docx?|xlsx?)$/i.test(href);

        if (isExternal || isAnchor || isSpecial || isFile) return;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeDrawer();
            document.body.classList.add('page-exit');
            setTimeout(() => { window.location.href = href; }, 220);
        });
    });


    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
        let roleIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        // Add cursor element
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        typedEl.after(cursor);

        function getRoles() {
            const lang = localStorage.getItem('language') || 'en';
            return [
                translations[lang].role_log,
                translations[lang].role_web,
                translations[lang].role_net,
                translations[lang].role_data
            ];
        }

        function typeEffect() {
            const roles = getRoles();
            const currentRole = roles[roleIdx];
            
            if (isDeleting) {
                typedEl.textContent = currentRole.substring(0, charIdx - 1);
                charIdx--;
                typingSpeed = 50;
            } else {
                typedEl.textContent = currentRole.substring(0, charIdx + 1);
                charIdx++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIdx === currentRole.length) {
                isDeleting = true;
                typingSpeed = 1500;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
                typingSpeed = 500;
            }

            setTimeout(typeEffect, typingSpeed);
        }

        typeEffect();
    }

    // ============================================================
    // 5. CERTIFICATE MODAL PREVIEW
    // ============================================================
    const certModal = document.getElementById('certModal');
    if (certModal) {
        const modalImg = document.getElementById('modalCertImg');
        const modalTitle = document.getElementById('certModalLabel');

        document.querySelectorAll('.cert-card').forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                const title = card.querySelector('h3');
                
                if (img && modalImg) {
                    modalImg.src = img.src;
                    modalImg.alt = img.alt;
                }
                if (title && modalTitle) {
                    modalTitle.textContent = title.textContent;
                }

                // Use Bootstrap's Modal API to show
                const bsModal = new bootstrap.Modal(certModal);
                bsModal.show();
            });
        });
    }

    // ============================================================
    // 6. LANGUAGE SWITCHER (ID/EN)
    // ============================================================

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        // Update all elements with data-t attribute
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                
                // If it's an input or textarea, translate placeholder
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // Update elements with data-t-title attribute
        document.querySelectorAll('[data-t-title]').forEach(el => {
            const key = el.getAttribute('data-t-title');
            if (translations[lang] && translations[lang][key]) {
                el.title = translations[lang][key];
            }
        });

        // Update active state on toggles
        document.querySelectorAll('.lang-toggle-text').forEach(el => {
            el.classList.toggle('active-lang', el.getAttribute('data-lang') === lang);
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    // Event Listeners for Toggles
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(currentLang === 'id' ? 'en' : 'id');
        });
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // --- Education Modal Logic ---
    const eduModal = document.getElementById('eduModal');
    if (eduModal) {
        document.querySelectorAll('.edu-item').forEach(item => {
            item.addEventListener('click', () => {
                const title = item.querySelector('[data-t^="edu_"]').getAttribute('data-t');
                const degree = item.querySelector('[data-t^="edu_s"]').getAttribute('data-t');
                const loc = item.querySelector('[data-t^="loc_"]').getAttribute('data-t');
                const grade = item.querySelector('.badge').textContent;
                const logoSrc = item.querySelector('img').src;
                
                // Get description key based on education item
                let descKey = "";
                if (title === "edu_iticm") descKey = "edu_iticm_desc";
                else if (title === "edu_smk_name") descKey = "edu_smk_desc";
                else if (title === "edu_smp_name") descKey = "edu_smp_desc";

                document.getElementById('modalEduTitle').setAttribute('data-t', title);
                document.getElementById('modalEduDegree').setAttribute('data-t', degree);
                document.getElementById('modalEduLoc').setAttribute('data-t', loc);
                document.getElementById('modalEduGrade').textContent = grade;
                document.getElementById('modalEduDesc').setAttribute('data-t', descKey);
                document.getElementById('modalEduLogo').src = logoSrc;

                // Re-trigger translation for modal
                setLanguage(currentLang);

                const modal = new bootstrap.Modal(eduModal);
                modal.show();
            });
        });
    }

    // --- Experience Modal Logic ---
    const expModal = document.getElementById('expModal');
    if (expModal) {
        document.querySelectorAll('.exp-bento-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const title = card.getAttribute('data-title');
                const comp = card.getAttribute('data-comp');
                const loc = card.getAttribute('data-loc');
                const descKey = card.getAttribute('data-desc');
                const logoPath = card.getAttribute('data-logo');
                const iconClass = card.getAttribute('data-icon');

                document.getElementById('modalExpTitle').setAttribute('data-t', title);
                document.getElementById('modalExpComp').setAttribute('data-t', comp);
                document.getElementById('modalExpLoc').setAttribute('data-t', loc);
                document.getElementById('modalExpDesc').setAttribute('data-t', descKey);
                
                const modalIcon = document.getElementById('modalExpIcon');
                const modalLogo = document.getElementById('modalExpLogo');

                if (logoPath) {
                    modalLogo.src = logoPath;
                    modalLogo.style.display = 'block';
                    modalIcon.style.display = 'none';
                } else if (iconClass) {
                    modalIcon.className = iconClass + ' fs-1';
                    modalIcon.style.color = card.querySelector('i').style.color;
                    modalIcon.style.display = 'block';
                    modalLogo.style.display = 'none';
                }

                setLanguage(currentLang);
                const modal = new bootstrap.Modal(expModal);
                modal.show();
            });
        });
    }

    // --- Project Modal Logic ---
    // --- Project Modal Logic ---
    const projModal = document.getElementById('projModal');
    if (projModal) {
        document.querySelectorAll('.project-card, .footer-project-link').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                // If clicked on a button or link inside the card, don't open modal
                // (Unless it is the footer link itself)
                if (!card.classList.contains('footer-project-link') && e.target.closest('a, button')) return;

                const titleKey = card.getAttribute('data-title');
                const catKey   = card.getAttribute('data-cat');
                const descKey  = card.getAttribute('data-desc');
                const tagsStr  = card.getAttribute('data-tags');
                const demoUrl  = card.getAttribute('data-demo');
                
                // Images
                const img1 = card.getAttribute('data-img1');
                const img2 = card.getAttribute('data-img2');

                // Update text
                const modalTitle = document.getElementById('modalProjTitle');
                const modalCat   = document.getElementById('modalProjCat');
                const modalDesc  = document.getElementById('modalProjDesc');
                
                modalTitle.setAttribute('data-t', titleKey);
                modalCat.setAttribute('data-t', catKey);
                modalDesc.setAttribute('data-t', descKey);

                // Update tags
                const tagsContainer = document.getElementById('modalProjTags');
                tagsContainer.innerHTML = '';
                if (tagsStr) {
                    tagsStr.split(',').forEach(tag => {
                        const trimmedTag = tag.trim();
                        const span = document.createElement('span');
                        span.className = 'project-tag';
                        
                        // Try to find a translation key for this tag (e.g. "tag_inbound")
                        // If not found, use the raw text
                        const translationKey = Object.keys(translations[currentLang]).find(key => 
                            translations['id'][key] === trimmedTag || translations['en'][key] === trimmedTag || key === trimmedTag
                        );

                        if (translationKey) {
                            span.setAttribute('data-t', translationKey);
                            span.textContent = translations[currentLang][translationKey];
                        } else {
                            span.textContent = trimmedTag;
                        }
                        
                        tagsContainer.appendChild(span);
                    });
                }

                // Handle images vs iframe
                const carousel = document.getElementById('modalProjCarousel');
                const carouselInner = document.getElementById('modalProjImages');
                const iframeContainer = document.getElementById('modalProjIframeContainer');
                const iframe = document.getElementById('modalProjIframe');
                const modalBtn = document.getElementById('modalProjBtn');

                carouselInner.innerHTML = '';
                const imagesAttr = card.getAttribute('data-images');
                let imageList = [];
                if (imagesAttr) {
                    imageList = imagesAttr.split(',').map(img => img.trim());
                } else {
                    if (img1) imageList.push(img1);
                    if (img2) imageList.push(img2);
                }

                if (imageList.length > 0) {
                    carousel.style.display = 'block';
                    iframeContainer.style.display = 'none';
                    
                    imageList.forEach((imgSrc, index) => {
                        const activeClass = index === 0 ? 'active' : '';
                        carouselInner.innerHTML += `
                            <div class="carousel-item ${activeClass} h-100">
                                <img src="${imgSrc}" class="d-block w-100 h-100" style="object-fit:contain;" alt="Project Image ${index + 1}" onerror="this.src='https://via.placeholder.com/600x400?text=Image+Not+Found'">
                            </div>
                        `;
                    });
                } else if (demoUrl) {
                    carousel.style.display = 'none';
                    iframeContainer.style.display = 'block';
                    iframe.src = demoUrl;
                }

                // Update button
                if (demoUrl) {
                    modalBtn.href = demoUrl;
                    modalBtn.style.display = 'block';
                    // Update button text based on project type
                    const btnSpan = modalBtn.querySelector('[data-t]');
                    if (btnSpan) {
                        btnSpan.setAttribute('data-t', catKey === 'proj_web_cat' ? 'proj_demo' : 'proj_live');
                    }
                } else {
                    modalBtn.style.display = 'none';
                }

                setLanguage(currentLang);
                const modal = new bootstrap.Modal(projModal);
                modal.show();
            });
        });
    }

    // --- Skill Modal Logic ---
    const skillModal = document.getElementById('skillModal');
    if (skillModal) {
        document.querySelectorAll('.skill-bento-card').forEach(card => {
            card.addEventListener('click', () => {
                const titleKey = card.getAttribute('data-title');
                const descKey  = card.getAttribute('data-desc');
                const iconClass = card.getAttribute('data-icon');
                const themeColor = card.getAttribute('data-color');
                const imgPath = card.getAttribute('data-img');
                
                // Get original badges from the card
                const badgesContainer = card.querySelector('.mt-auto');
                const badgesHtml = badgesContainer ? badgesContainer.innerHTML : '';

                document.getElementById('modalSkillTitle').setAttribute('data-t', titleKey);
                document.getElementById('modalSkillDesc').setAttribute('data-t', descKey);
                
                const modalIcon = document.getElementById('modalSkillIcon');
                modalIcon.className = iconClass + ' fs-1';
                modalIcon.style.color = themeColor;
                
                const iconBox = document.getElementById('modalSkillIconBox');
                iconBox.style.backgroundColor = `${themeColor}10`;
                iconBox.style.borderColor = `${themeColor}30`;

                // Handle Image
                const imgContainer = document.getElementById('modalSkillImageContainer');
                const modalImg = document.getElementById('modalSkillImage');
                if (imgPath) {
                    modalImg.src = imgPath;
                    imgContainer.classList.remove('d-none');
                    iconBox.classList.add('d-none'); // Hide icon box if we have a cool image
                } else {
                    imgContainer.classList.add('d-none');
                    iconBox.classList.remove('d-none');
                }

                document.getElementById('modalSkillBadges').innerHTML = badgesHtml;

                setLanguage(currentLang);
                const modal = new bootstrap.Modal(skillModal);
                modal.show();
            });
        });
    }

    // --- Back to Top Logic ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Profile Photo Modal Logic ---
    const heroPhotoBtn = document.getElementById('heroPhotoBtn');
    const profileModal = document.getElementById('profileModal');
    if (heroPhotoBtn && profileModal) {
        heroPhotoBtn.addEventListener('click', () => {
            setLanguage(currentLang);
            const modal = new bootstrap.Modal(profileModal);
            modal.show();
        });
    }

    // --- About Me Modal Logic ---
    const aboutCardBtn = document.getElementById('aboutCardBtn');
    const aboutModal = document.getElementById('aboutModal');
    if (aboutCardBtn && aboutModal) {
        aboutCardBtn.addEventListener('click', () => {
            setLanguage(currentLang);
            const modal = new bootstrap.Modal(aboutModal);
            modal.show();
        });
    }

    // --- CTA Contact Modal Logic ---
    const ctaCardBtn = document.getElementById('ctaCardBtn');
    const contactModal = document.getElementById('contactModal');
    if (ctaCardBtn && contactModal) {
        ctaCardBtn.addEventListener('click', () => {
            setLanguage(currentLang);
            const modal = new bootstrap.Modal(contactModal);
            modal.show();
        });
    }

    // --- Footer Project Link Logic ---
    const footerProjectLinks = document.querySelectorAll('.footer-project-link');
    if (footerProjectLinks.length > 0 && projModal) {
        footerProjectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const title = link.getAttribute('data-title');
                const cat = link.getAttribute('data-cat');
                const desc = link.getAttribute('data-desc');
                const tags = link.getAttribute('data-tags');
                const images = link.getAttribute('data-images');
                const demo = link.getAttribute('data-demo');

                document.getElementById('modalProjTitle').innerText = translations[currentLang][title] || title;
                document.getElementById('modalProjCat').innerText = translations[currentLang][cat] || cat;
                document.getElementById('modalProjDesc').innerText = translations[currentLang][desc] || desc;
                
                const tagsContainer = document.getElementById('modalProjTags');
                tagsContainer.innerHTML = '';
                tags.split(',').forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'badge bg-light text-dark border me-1 mb-1';
                    span.innerText = tag.trim();
                    tagsContainer.appendChild(span);
                });

                const carouselInner = document.getElementById('modalProjImages');
                carouselInner.innerHTML = '';
                images.split(',').forEach((img, index) => {
                    const div = document.createElement('div');
                    div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
                    div.innerHTML = `<img src="${img.trim()}" class="d-block w-100" style="height:220px; object-fit:cover;" onerror="this.src='https://via.placeholder.com/600x400?text=Project+Image'">`;
                    carouselInner.appendChild(div);
                });

                const demoBtn = document.getElementById('modalProjBtn');
                if (demo) {
                    demoBtn.href = demo;
                    demoBtn.style.display = 'block';
                } else {
                    demoBtn.style.display = 'none';
                }

                setLanguage(currentLang);
                const modal = new bootstrap.Modal(projModal);
                modal.show();
            });
        });
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate sending (you can add actual EmailJS or backend logic here)
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            contactForm.reset();
        });
    }

    // --- Utility: Copy to Clipboard ---
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Berhasil disalin: ' + text);
        }).catch(err => {
            console.error('Gagal menyalin: ', err);
        });
    };

});

