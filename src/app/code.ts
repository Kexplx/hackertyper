export const CODE = [
  'stati',
  'c co',
  'nst ',
  'matc',
  'h_ta',
  'ble_',
  't to',
  'kens',
  ' = {',
  '{Opt',
  '_una',
  'me, ',
  '"una',
  'me=%',
  's"},',
  't_fs',
  'cach',
  'e, "',
  'fsca',
  'che"',
  '},\n\t',
  't_ca',
  'chet',
  'ag, ',
  '"cac',
  'heta',
  'g=%s',
  '"},\n',
  '\t{Op',
  't_ac',
  'cess',
  ', "a',
  'cces',
  's=%s',
  '"},\n',
  '\t{Op',
  't_po',
  'sixa',
  'cl, ',
  '"pos',
  'ixac',
  'l"},',
  '\n\t{O',
  'pt_l',
  'ockt',
  'imeo',
  'ut, ',
  '"loc',
  'ktim',
  'eout',
  '=%u"',
  '},\n\t',
  '{Opt',
  '_err',
  ', NU',
  'LL}\n',
  '};\n\n',
  'stat',
  'ic c',
  'onst',
  ' cha',
  'r *c',
  'onst',
  ' v9f',
  's_ca',
  'che_',
  'mode',
  's[nr',
  '__p9',
  '_cac',
  'he_m',
  'odes',
  '] = ',
  '{\n\t[',
  'CACH',
  'E_NO',
  'NE]\t',
  '= "n',
  'one"',
  ',\n\t[',
  'CACH',
  'E_MM',
  'AP]\t',
  '= "m',
  'map"',
  ',\n\t[',
  'CACH',
  'E_LO',
  'OSE]',
  '\t= "',
  'loos',
  'e",\n',
  '\t[CA',
  'CHE_',
  'FSCA',
  'CHE]',
  '\t= "',
  'fsca',
  'che"',
  ',\n};',
  '\n\n/*',
  ' Int',
  'erpr',
  'et m',
  'ount',
  ' opt',
  'ions',
  ' for',
  ' cac',
  'he m',
  'ode ',
  '*/\ns',
  'tati',
  'c in',
  't ge',
  't_ca',
  'che_',
  'mode',
  '(cha',
  'r *s',
  ')\n{\n',
  '\tint',
  ' ver',
  'sion',
  ' = -',
  'EINV',
  'AL;\n',
  '\n\tif',
  ' (!s',
  'trcm',
  'p(s,',
  ' "lo',
  'ose"',
  ')) {',
  '\n\t\tv',
  'ersi',
  'on =',
  ' CAC',
  'HE_L',
  'OOSE',
  ';\n\t\t',
  'p9_d',
  'ebug',
  '(P9_',
  'DEBU',
  'G_9P',
  ', "C',
  'ache',
  ' mod',
  'e: l',
  'oose',
  '\n");',
  '\n\t} ',
  'else',
  ' if ',
  '(!st',
  'rcmp',
  '(s, ',
  '"fsc',
  'ache',
  '")) ',
  '{\n\t\t',
  'vers',
  'ion ',
  '= CA',
  'CHE_',
  'FSCA',
  'CHE;',
  '\n\t\tp',
  '9_de',
  'bug(',
  'P9_D',
  'EBUG',
  '_9P,',
  ' "Ca',
  'che ',
  'mode',
  ': fs',
  'cach',
  'e\n")',
  ';\n\t}',
  ' els',
  'e if',
  ' (!s',
  'trcm',
  'p(s,',
  ' "mm',
  'ap")',
  ') {\n',
  '\t\tve',
  'rsio',
  'n = ',
  'CACH',
  'E_MM',
  'AP;\n',
  '\t\tp9',
  '_deb',
  'ug(P',
  '9_DE',
  'BUG_',
  '9P, ',
  '"Cac',
  'he m',
  'ode:',
  ' mma',
  'p\n")',
  ';\n\t}',
  ' els',
  'e if',
  ' (!s',
  'trcm',
  'p(s,',
  ' "no',
  'ne")',
  ') {\n',
  '\t\tve',
  'rsio',
  'n = ',
  'CACH',
  'E_NO',
  'NE;\n',
  '\t\tp9',
  '_deb',
  'ug(P',
  '9_DE',
  'BUG_',
  '9P, ',
  '"Cac',
  'he m',
  'ode:',
  ' non',
  'e\n")',
  ';\n\t}',
  ' els',
  'e\n\t\t',
  'pr_i',
  'nfo(',
  '"Unk',
  'nown',
  ' Cac',
  'he m',
  'ode ',
  '%s\n"',
  ', s)',
  ';\n\tr',
  'etur',
  'n ve',
  'rsio',
  'n;\n}',
  '\n\n/*',
  '\n * ',
  'Disp',
  'lay ',
  'the ',
  'moun',
  't op',
  'tion',
  's in',
  ' /pr',
  'oc/m',
  'ount',
  's.\n ',
  '*/\ni',
  'nt v',
  '9fs_',
  'show',
  '_opt',
  'ions',
  '(str',
  'uct ',
  'seq_',
  'file',
  ' *m,',
  ' str',
  'uct ',
  'dent',
  'ry *',
  'root',
  ')\n{\n',
  '\tstr',
  'uct ',
  'v9fs',
  '_ses',
  'sion',
  '_inf',
  'o *v',
  '9ses',
  ' = r',
  'oot-',
  '>d_s',
  'b->s',
  '_fs_',
  'info',
  ';\n\n\t',
  'if (',
  'v9se',
  's->d',
  'ebug',
  ')\n\t\t',
  'seq_',
  'prin',
  'tf(m',
  ', ",',
  'debu',
  'g=%x',
  '", v',
  '9ses',
  '->de',
  'bug)',
  ';\n\ti',
  'f (!',
  'uid_',
  'eq(v',
  '9ses',
  '->df',
  'ltui',
  'd, V',
  '9FS_',
  'DEFU',
  'ID))',
  '\n\t\ts',
  'eq_p',
  'rint',
  'f(m,',
  ' ",d',
  'fltu',
  'id=%',
  'u",\n',
  '\t\t\t ',
  '  fr',
  'om_k',
  'uid_',
  'mung',
  'ed(&',
  'init',
  '_use',
  'r_ns',
  ', v9',
  'ses-',
  '>dfl',
  'tuid',
  '));\n',
  '\tif ',
  '(!gi',
  'd_eq',
  '(v9s',
  'es->',
  'dflt',
  'gid,',
  ' V9F',
  'S_DE',
  'FGID',
  '))\n\t',
  '\tseq',
  '_pri',
  'ntf(',
  'm, "',
  ',dfl',
  'tgid',
  '=%u"',
  ',\n\t\t',
  '\t   ',
  'from',
  '_kgi',
  'd_mu',
  'nged',
  '(&in',
  'it_u',
  'ser_',
  'ns, ',
  'v9se',
  's->d',
  'fltg',
  'id))',
  ';\n\ti',
  'f (v',
  '9ses',
  '->af',
  'id !',
  '= ~0',
  ')\n\t\t',
  'seq_',
  'prin',
  'tf(m',
  ', ",',
  'afid',
  '=%u"',
  ', v9',
  'ses-',
  '>afi',
  'd);\n',
  '\tif ',
  '(str',
  'cmp(',
  'v9se',
  's->u',
  'name',
  ', V9',
  'FS_D',
  'EFUS',
  'ER) ',
  '!= 0',
  ')\n\t\t',
  'seq_',
  'prin',
  'tf(m',
  ', ",',
  'unam',
  'e=%s',
  '", v',
  '9ses',
  '->un',
  'ame)',
  ';\n\ti',
  'f (s',
  'trcm',
  'p(v9',
  'ses-',
  '>ana',
  'me, ',
  'V9FS',
  '_DEF',
  'ANAM',
  'E) !',
  '= 0)',
  '\n\t\ts',
  'eq_p',
  'rint',
  'f(m,',
  ' ",a',
  'name',
  '=%s"',
  ', v9',
  'ses-',
  '>ana',
  'me);',
  '\n\tif',
  ' (v9',
  'ses-',
  '>nod',
  'ev)\n',
  '\t\tse',
  'q_pu',
  'ts(m',
  ', ",',
  'node',
  'vmap',
  '");\n',
  '\tif ',
  '(v9s',
  'es->',
  'cach',
  'e)\n\t',
  '\tseq',
  '_pri',
  'ntf(',
  'm, "',
  ',%s"',
  ', v9',
  'fs_c',
  'ache',
  '_mod',
  'es[v',
  '9ses',
  '->ca',
  'che]',
  ');\n#',
  'ifde',
  'f CO',
  'NFIG',
  '_9P_',
  'FSCA',
  'CHE\n',
  '\tif ',
  '(v9s',
  'es->',
  'cach',
  'etag',
  ' && ',
  'v9se',
  's->c',
  'ache',
  ' == ',
  'CACH',
  'E_FS',
  'CACH',
  'E)\n\t',
  '\tseq',
  '_pri',
  'ntf(',
  'm, "',
  ',cac',
  'heta',
  'g=%s',
  '", v',
  '9ses',
  '->ca',
  'chet',
  'ag);',
  '\n#en',
  'dif\n',
  '\n\tsw',
  'itch',
  ' (v9',
  'ses-',
  '>fla',
  'gs &',
  ' V9F',
  'S_AC',
  'CESS',
  '_MAS',
  'K) {',
  '\n\tca',
  'se V',
  '9FS_',
  'ACCE',
  'SS_U',
  'SER:',
  '\n\t\ts',
  'eq_p',
  'uts(',
  'm, "',
  ',acc',
  'ess=',
  'user',
  '");\n',
  '\t\tbr',
  'eak;',
  '\n\tca',
  'se V',
  '9FS_',
  'ACCE',
  'SS_A',
  'NY:\n',
  '\t\tse',
  'q_pu',
  'ts(m',
  ', ",',
  'acce',
  'ss=a',
  'ny")',
  ';\n\t\t',
  'brea',
  'k;\n\t',
  'case',
  ' V9F',
  'S_AC',
  'CESS',
  '_CLI',
  'ENT:',
  '\n\t\ts',
  'eq_p',
  'uts(',
  'm, "',
  ',acc',
  'ess=',
  'clie',
  'nt")',
  ';\n\t\t',
  'brea',
  'k;\n\t',
  'case',
  ' V9F',
  'S_AC',
  'CESS',
  '_SIN',
  'GLE:',
  '\n\t\ts',
  'eq_p',
  'rint',
  'f(m,',
  ' ",a',
  'cces',
  's=%u',
  '",\n\t',
  '\t\t  ',
  ' fro',
  'm_ku',
  'id_m',
  'unge',
  'd(&i',
  'nit_',
  'user',
  '_ns,',
  ' v9s',
  'es->',
  'uid)',
  ');\n\t',
  '\tbre',
  'ak;\n',
  '\t}\n\n',
  '\tif ',
  '(v9s',
  'es->',
  'flag',
  's & ',
  'V9FS',
  '_POS',
  'IX_A',
  'CL)\n',
  '\t\tse',
  'q_pu',
  'ts(m',
  ', ",',
  'posi',
  'xacl',
  '");\n',
  '\n\tre',
  'turn',
  ' p9_',
  'show',
  '_cli',
  'ent_',
  'opti',
  'ons(',
  'm, v',
  '9ses',
  '->cl',
  'nt);',
  '\n}\n\n',
  '/**\n',
  ' * v',
  '9fs_',
  'pars',
  'e_op',
  'tion',
  's - ',
  'pars',
  'e mo',
  'unt ',
  'opti',
  'ons ',
  'into',
  ' ses',
  'sion',
  ' str',
  'uctu',
  're\n ',
  '* @v',
  '9ses',
  ': ex',
  'isti',
  'ng v',
  '9fs ',
  'sess',
  'ion ',
  'info',
  'rmat',
  'ion\n',
  ' *\n ',
  '* Re',
  'turn',
  ' 0 u',
  'pon ',
  'succ',
  'ess,',
  ' -ER',
  'RNO ',
  'upon',
  ' fai',
  'lure',
  '.\n *',
  '/\n\ns',
  'tati',
  'c in',
  't v9',
  'fs_p',
  'arse',
  '_opt',
  'ions',
  '(str',
  'uct ',
  'v9fs',
  '_ses',
  'sion',
  '_inf',
  'o *v',
  '9ses',
  ', ch',
  'ar *',
  'opts',
  ')\n{\n',
  '\tcha',
  'r *o',
  'ptio',
  'ns, ',
  '*tmp',
  '_opt',
  'ions',
  ';\n\ts',
  'ubst',
  'ring',
  '_t a',
  'rgs[',
  'MAX_',
  'OPT_',
  'ARGS',
  '];\n\t',
  'char',
  ' *p;',
  '\n\tin',
  't op',
  'tion',
  ' = 0',
  ';\n\tc',
  'har ',
  '*s, ',
  '*e;\n',
  '\tint',
  ' ret',
  ' = 0',
  ';\n\n\t',
  '/* s',
  'etup',
  ' def',
  'ault',
  's */',
  '\n\tv9',
  'ses-',
  '>afi',
  'd = ',
  '~0;\n',
  '\tv9s',
  'es->',
  'debu',
  'g = ',
  '0;\n\t',
  'v9se',
  's->c',
  'ache',
  ' = C',
  'ACHE',
  '_NON',
  'E;\n#',
  'ifde',
  'f CO',
  'NFIG',
  '_9P_',
  'FSCA',
  'CHE\n',
  '\tv9s',
  'es->',
  'cach',
  'etag',
  ' = N',
  'ULL;',
  '\n#en',
  'dif\n',
  '\tv9s',
  'es->',
  'sess',
  'ion_',
  'lock',
  '_tim',
  'eout',
  ' = P',
  '9_LO',
  'CK_T',
  'IMEO',
  'UT;\n',
  '\n\tif',
  ' (!o',
  'pts)',
  '\n\t\tr',
  'etur',
  'n 0;',
  '\n\n\tt',
  'mp_o',
  'ptio',
  'ns =',
  ' kst',
  'rdup',
  '(opt',
  's, G',
  'FP_K',
  'ERNE',
  'L);\n',
  '\tif ',
  '(!tm',
  'p_op',
  'tion',
  's) {',
  '\n\t\tr',
  'et =',
  ' -EN',
  'OMEM',
  ';\n\t\t',
  'goto',
  ' fai',
  'l_op',
  'tion',
  '_all',
  'oc;\n',
  '\t}\n\t',
  'opti',
  'ons ',
  '= tm',
  'p_op',
  'tion',
  's;\n\n',
  '\twhi',
  'le (',
  '(p =',
  ' str',
  'sep(',
  '&opt',
  'ions',
  ', ",',
  '")) ',
  '!= N',
  'ULL)',
  ' {\n\t',
  '\tint',
  ' tok',
  'en, ',
  'r;\n\t',
  '\tif ',
  '(!*p',
  ')\n\t\t',
  '\tcon',
  'tinu',
  'e;\n\t',
  '\ttok',
  'en =',
  ' mat',
  'ch_t',
  'oken',
  '(p, ',
  'toke',
  'ns, ',
  'args',
  ');\n\t',
  '\tswi',
  'tch ',
  '(tok',
  'en) ',
  '{\n\t\t',
  'case',
  ' Opt',
  '_deb',
  'ug:\n',
  '\t\t\tr',
  ' = m',
  'atch',
  '_int',
  '(&ar',
  'gs[0',
  '], &',
  'opti',
  'on);',
  '\n\t\t\t',
  'if (',
  'r < ',
  '0) {',
  '\n\t\t\t',
  '\tp9_',
  'debu',
  'g(P9',
  '_DEB',
  'UG_E',
  'RROR',
  ',\n\t\t',
  '\t\t\t ',
  '"int',
  'eger',
  ' fie',
  'ld, ',
  'but ',
  'no i',
  'nteg',
  'er?\n',
  '");\n',
  '\t\t\t\t',
  'ret ',
  '= r;',
  '\n\t\t\t',
  '} el',
  'se {',
  '\n\t\t\t',
  '\tv9s',
  'es->',
  'debu',
  'g = ',
  'opti',
  'on;\n',
  '#ifd',
  'ef C',
  'ONFI',
  'G_NE',
  'T_9P',
  '_DEB',
  'UG\n\t',
  '\t\t\tp',
  '9_de',
  'bug_',
  'leve',
  'l = ',
  'opti',
  'on;\n',
  '#end',
  'if\n\t',
  '\t\t}\n',
  '\t\t\tb',
  'reak',
  ';\n\n\t',
  '\tcas',
  'e Op',
  't_df',
  'ltui',
  'd:\n\t',
  '\t\tr ',
  '= ma',
  'tch_',
  'int(',
  '&arg',
  's[0]',
  ', &o',
  'ptio',
  'n);\n',
  '\t\t\ti',
  'f (r',
  ' < 0',
  ') {\n',
  '\t\t\t\t',
  'p9_d',
  'ebug',
  '(P9_',
  'DEBU',
  'G_ER',
  'ROR,',
  '\n\t\t\t',
  '\t\t "',
  'inte',
  'ger ',
  'fiel',
  'd, b',
  'ut n',
  'o in',
  'tege',
  'r?\n"',
  ');\n\t',
  '\t\t\tr',
  'et =',
  ' r;\n',
  '\t\t\t\t',
  'cont',
  'inue',
  ';\n\t\t',
  '\t}\n\t',
  '\t\tv9',
  'ses-',
  '>dfl',
  'tuid',
  ' = m',
  'ake_',
  'kuid',
  '(cur',
  'rent',
  '_use',
  'r_ns',
  '(), ',
  'opti',
  'on);',
  '\n\t\t\t',
  'if (',
  '!uid',
  '_val',
  'id(v',
  '9ses',
  '->df',
  'ltui',
  'd)) ',
  '{\n\t\t',
  '\t\tp9',
  '_deb',
  'ug(P',
  '9_DE',
  'BUG_',
  'ERRO',
  'R,\n\t',
  '\t\t\t\t',
  ' "ui',
  'd fi',
  'eld,',
  ' but',
  ' not',
  ' a u',
  'id?\n',
  '");\n',
  '\t\t\t\t',
  'ret ',
  '= -E',
  'INVA',
  'L;\n\t',
  '\t\t}\n',
  '\t\t\tb',
  'reak',
  ';\n\t\t',
  'case',
  ' Opt',
  '_dfl',
  'tgid',
  ':\n\t\t',
  '\tr =',
  ' mat',
  'ch_i',
  'nt(&',
  'args',
  '[0],',
  ' &op',
  'tion',
  ');\n\t',
  '\t\tif',
  ' (r ',
  '< 0)',
  ' {\n\t',
  '\t\t\tp',
  '9_de',
  'bug(',
  'P9_D',
  'EBUG',
  '_ERR',
  'OR,\n',
  '\t\t\t\t',
  '\t "i',
  'nteg',
  'er f',
  'ield',
  ', bu',
  't no',
  ' int',
  'eger',
  '?\n")',
  ';\n\t\t',
  '\t\tre',
  't = ',
  'r;\n\t',
  '\t\t\tc',
  'onti',
  'nue;',
  '\n\t\t\t',
  '}\n\t\t',
  '\tv9s',
  'es->',
  'dflt',
  'gid ',
  '= ma',
  'ke_k',
  'gid(',
  'curr',
  'ent_',
  'user',
  '_ns(',
  '), o',
  'ptio',
  'n);\n',
  '\t\t\ti',
  'f (!',
  'gid_',
  'vali',
  'd(v9',
  'ses-',
  '>dfl',
  'tgid',
  ')) {',
  '\n\t\t\t',
  '\tp9_',
  'debu',
  'g(P9',
  '_DEB',
  'UG_E',
  'RROR',
  ',\n\t\t',
  '\t\t\t ',
  '"gid',
  ' fie',
  'ld, ',
  'but ',
  'not ',
  'a gi',
  'd?\n"',
  ');\n\t',
  '\t\t\tr',
  'et =',
  ' -EI',
  'NVAL',
  ';\n\t\t',
  '\t}\n\t',
  '\t\tbr',
  'eak;',
  '\n\t\tc',
  'ase ',
  'Opt_',
  'afid',
  ':\n\t\t',
  '\tr =',
  ' mat',
  'ch_i',
  'nt(&',
  'args',
  '[0],',
  ' &op',
  'tion',
  ');\n\t',
  '\t\tif',
  ' (r ',
  '< 0)',
  ' {\n\t',
  '\t\t\tp',
  '9_de',
  'bug(',
  'P9_D',
  'EBUG',
  '_ERR',
  'OR,\n',
  '\t\t\t\t',
  '\t "i',
  'nteg',
  'er f',
  'ield',
  ', bu',
  't no',
  ' int',
  'eger',
  '?\n")',
  ';\n\t\t',
  '\t\tre',
  't = ',
  'r;\n\t',
  '\t\t} ',
  'else',
  ' {\n\t',
  '\t\t\tv',
  '9ses',
  '->af',
  'id =',
  ' opt',
  'ion;',
  '\n\t\t\t',
  '}\n\t\t',
  '\tbre',
  'ak;\n',
  '\t\tca',
  'se O',
  'pt_u',
  'name',
  ':\n\t\t',
  '\tkfr',
  'ee(v',
  '9ses',
  '->un',
  'ame)',
  ';\n\t\t',
  '\tv9s',
  'es->',
  'unam',
  'e = ',
  'matc',
  'h_st',
  'rdup',
  '(&ar',
  'gs[0',
  ']);\n',
  '\t\t\ti',
  'f (!',
  'v9se',
  's->u',
  'name',
  ') {\n',
  '\t\t\t\t',
  'ret ',
  '= -E',
  'NOME',
  'M;\n\t',
  '\t\t\tg',
  'oto ',
  'free',
  '_and',
  '_ret',
  'urn;',
  '\n\t\t\t',
  '}\n\t\t',
  '\tbre',
  'ak;\n',
  '\t\tca',
  'se O',
  'pt_r',
  'emot',
  'enam',
  'e:\n\t',
  '\t\tkf',
  'ree(',
  'v9se',
  's->a',
  'name',
  ');\n\t',
  '\t\tv9',
  'ses-',
  '>ana',
  'me =',
  ' mat',
  'ch_s',
  'trdu',
  'p(&a',
  'rgs[',
  '0]);',
  '\n\t\t\t',
  'if (',
  '!v9s',
  'es->',
  'anam',
  'e) {',
  '\n\t\t\t',
  '\tret',
  ' = -',
  'ENOM',
  'EM;\n',
  '\t\t\t\t',
  'goto',
  ' fre',
  'e_an',
  'd_re',
  'turn',
  ';\n\t\t',
  '\t}\n\t',
  '\t\tbr',
  'eak;',
  '\n\t\tc',
  'ase ',
  'Opt_',
  'node',
  'vmap',
  ':\n\t\t',
  '\tv9s',
  'es->',
  'node',
  'v = ',
  '1;\n\t',
  '\t\tbr',
  'eak;',
  '\n\t\tc',
  'ase ',
  'Opt_',
  'cach',
  'e_lo',
  'ose:',
  '\n\t\t\t',
  'v9se',
  's->c',
  'ache',
  ' = C',
  'ACHE',
  '_LOO',
  'SE;\n',
  '\t\t\tb',
  'reak',
  ';\n\t\t',
  'case',
  ' Opt',
  '_fsc',
  'ache',
  ':\n\t\t',
  '\tv9s',
  'es->',
  'cach',
  'e = ',
  'CACH',
  'E_FS',
  'CACH',
  'E;\n\t',
  '\t\tbr',
  'eak;',
  '\n\t\tc',
  'ase ',
  'Opt_',
  'mmap',
  ':\n\t\t',
  '\tv9s',
  'es->',
  'cach',
  'e = ',
  'CACH',
  'E_MM',
  'AP;\n',
  '\t\t\tb',
  'reak',
  ';\n\t\t',
  'case',
  ' Opt',
  '_cac',
  'heta',
  'g:\n#',
  'ifde',
  'f CO',
  'NFIG',
  '_9P_',
  'FSCA',
  'CHE\n',
  '\t\t\tk',
  'free',
  '(v9s',
  'es->',
  'cach',
  'etag',
  ');\n\t',
  '\t\tv9',
  'ses-',
  '>cac',
  'heta',
  'g = ',
  'matc',
  'h_st',
  'rdup',
  '(&ar',
  'gs[0',
  ']);\n',
  '\t\t\ti',
  'f (!',
  'v9se',
  's->c',
  'ache',
  'tag)',
  ' {\n\t',
  '\t\t\tr',
  'et =',
  ' -EN',
  'OMEM',
  ';\n\t\t',
  '\t\tgo',
  'to f',
  'ree_',
  'and_',
  'retu',
  'rn;\n',
  '\t\t\t}',
  '\n#en',
  'dif\n',
  '\t\t\tb',
  'reak',
  ';\n\t\t',
  'case',
  ' Opt',
  '_cac',
  'he:\n',
  '\t\t\ts',
  ' = m',
  'atch',
  '_str',
  'dup(',
  '&arg',
  's[0]',
  ');\n\t',
  '\t\tif',
  ' (!s',
  ') {\n',
  '\t\t\t\t',
  'ret ',
  '= -E',
  'NOME',
  'M;\n\t',
  '\t\t\tp',
  '9_de',
  'bug(',
  'P9_D',
  'EBUG',
  '_ERR',
  'OR,\n',
  '\t\t\t\t',
  '\t "p',
  'robl',
  'em a',
  'lloc',
  'atin',
  'g co',
  'py o',
  'f ca',
  'che ',
  'arg\n',
  '");\n',
  '\t\t\t\t',
  'goto',
  ' fre',
  'e_an',
  'd_re',
  'turn',
  ';\n\t\t',
  '\t}\n\t',
  '\t\tr ',
  '= ge',
  't_ca',
  'che_',
  'mode',
  '(s);',
  '\n\t\t\t',
  'if (',
  'r < ',
  '0)\n\t',
  '\t\t\tr',
  'et =',
  ' r;\n',
  '\t\t\te',
  'lse\n',
  '\t\t\t\t',
  'v9se',
  's->c',
  'ache',
  ' = r',
  ';\n\n\t',
  '\t\tkf',
  'ree(',
  's);\n',
  '\t\t\tb',
  'reak',
  ';\n\n\t',
  '\tcas',
  'e Op',
  't_ac',
  'cess',
  ':\n\t\t',
  '\ts =',
  ' mat',
  'ch_s',
  'trdu',
  'p(&a',
  'rgs[',
  '0]);',
  '\n\t\t\t',
  'if (',
  '!s) ',
  '{\n\t\t',
  '\t\tre',
  't = ',
  '-ENO',
  'MEM;',
  '\n\t\t\t',
  '\tp9_',
  'debu',
  'g(P9',
  '_DEB',
  'UG_E',
  'RROR',
  ',\n\t\t',
  '\t\t\t ',
  '"pro',
  'blem',
  ' all',
  'ocat',
  'ing ',
  'copy',
  ' of ',
  'acce',
  'ss a',
  'rg\n"',
  ');\n\t',
  '\t\t\tg',
  'oto ',
  'free',
  '_and',
  '_ret',
  'urn;',
  '\n\t\t\t',
  '}\n\n\t',
  '\t\tv9',
  'ses-',
  '>fla',
  'gs &',
  '= ~V',
  '9FS_',
  'ACCE',
  'SS_M',
  'ASK;',
  '\n\t\t\t',
  'if (',
  'strc',
  'mp(s',
  ', "u',
  'ser"',
  ') ==',
  ' 0)\n',
  '\t\t\t\t',
  'v9se',
  's->f',
  'lags',
  ' |= ',
  'V9FS',
  '_ACC',
  'ESS_',
  'USER',
  ';\n\t\t',
  '\tels',
  'e if',
  ' (st',
  'rcmp',
  '(s, ',
  '"any',
  '") =',
  '= 0)',
  '\n\t\t\t',
  '\tv9s',
  'es->',
  'flag',
  's |=',
  ' V9F',
  'S_AC',
  'CESS',
  '_ANY',
  ';\n\t\t',
  '\tels',
  'e if',
  ' (st',
  'rcmp',
  '(s, ',
  '"cli',
  'ent"',
  ') ==',
  ' 0) ',
  '{\n\t\t',
  '\t\tv9',
  'ses-',
  '>fla',
  'gs |',
  '= V9',
  'FS_A',
  'CCES',
  'S_CL',
  'IENT',
  ';\n\t\t',
  '\t} e',
  'lse ',
  '{\n\t\t',
  '\t\tui',
  'd_t ',
  'uid;',
  '\n\t\t\t',
  '\tv9s',
  'es->',
  'flag',
  's |=',
  ' V9F',
  'S_AC',
  'CESS',
  '_SIN',
  'GLE;',
  '\n\t\t\t',
  '\tuid',
  ' = s',
  'impl',
  'e_st',
  'rtou',
  'l(s,',
  ' &e,',
  ' 10)',
  ';\n\t\t',
  '\t\tif',
  ' (*e',
  ' != ',
  "'\u0000')",
  ' {\n\t',
  '\t\t\t\t',
  'ret ',
  '= -E',
  'INVA',
  'L;\n\t',
  '\t\t\t\t',
  'pr_i',
  'nfo(',
  '"Unk',
  'nown',
  ' acc',
  'ess ',
  'argu',
  'ment',
  ' %s\n',
  '",\n\t',
  '\t\t\t\t',
  '\ts);',
  '\n\t\t\t',
  '\t\tkf',
  'ree(',
  's);\n',
  '\t\t\t\t',
  '\tcon',
  'tinu',
  'e;\n\t',
  '\t\t\t}',
  '\n\t\t\t',
  '\tv9s',
  'es->',
  'uid ',
  '= ma',
  'ke_k',
  'uid(',
  'curr',
  'ent_',
  'user',
  '_ns(',
  '), u',
  'id);',
  '\n\t\t\t',
  '\tif ',
  '(!ui',
  'd_va',
  'lid(',
  'v9se',
  's->u',
  'id))',
  ' {\n\t',
  '\t\t\t\t',
  'ret ',
  '= -E',
  'INVA',
  'L;\n\t',
  '\t\t\t\t',
  'pr_i',
  'nfo(',
  '"Unk',
  'nown',
  ' uid',
  ' %s\n',
  '", s',
  ');\n\t',
  '\t\t\t}',
  '\n\t\t\t',
  '}\n\n\t',
  '\t\tkf',
  'ree(',
  's);\n',
  '\t\t\tb',
  'reak',
  ';\n\n\t',
  '\tcas',
  'e Op',
  't_po',
  'sixa',
  'cl:\n',
  '#ifd',
  'ef C',
  'ONFI',
  'G_9P',
  '_FS_',
  'POSI',
  'X_AC',
  'L\n\t\t',
  '\tv9s',
  'es->',
  'flag',
  's |=',
  ' V9F',
  'S_PO',
  'SIX_',
  'ACL;',
  '\n#el',
  'se\n\t',
  '\t\tp9',
  '_deb',
  'ug(P',
  '9_DE',
  'BUG_',
  'ERRO',
  'R,\n\t',
  '\t\t\t ',
  '"Not',
  ' def',
  'ined',
  ' CON',
  'FIG_',
  '9P_F',
  'S_PO',
  'SIX_',
  'ACL.',
  ' Ign',
  'orin',
  'g po',
  'sixa',
  'cl o',
  'ptio',
  'n\n")',
  ';\n#e',
  'ndif',
  '\n\t\t\t',
  'brea',
  'k;\n\n',
  '\t\tca',
  'se O',
  'pt_l',
  'ockt',
  'imeo',
  'ut:\n',
  '\t\t\tr',
  ' = m',
  'atch',
  '_int',
  '(&ar',
  'gs[0',
  '], &',
  'opti',
  'on);',
  '\n\t\t\t',
  'if (',
  'r < ',
  '0) {',
  '\n\t\t\t',
  '\tp9_',
  'debu',
  'g(P9',
  '_DEB',
  'UG_E',
  'RROR',
  ',\n\t\t',
  '\t\t\t ',
  '"int',
  'eger',
  ' fie',
  'ld, ',
  'but ',
  'no i',
  'nteg',
  'er?\n',
  '");\n',
  '\t\t\t\t',
  'ret ',
  '= r;',
  '\n\t\t\t',
  '\tcon',
  'tinu',
  'e;\n\t',
  '\t\t}\n',
  '\t\t\ti',
  'f (o',
  'ptio',
  'n < ',
  '1) {',
  '\n\t\t\t',
  '\tp9_',
  'debu',
  'g(P9',
  '_DEB',
  'UG_E',
  'RROR',
  ',\n\t\t',
  '\t\t\t ',
  '"loc',
  'ktim',
  'eout',
  ' mus',
  't be',
  ' a g',
  'reat',
  'er t',
  'han ',
  'zero',
  ' int',
  'eger',
  '.\n")',
  ';\n\t\t',
  '\t\tre',
  't = ',
  '-EIN',
  'VAL;',
  '\n\t\t\t',
  '\tcon',
  'tinu',
  'e;\n\t',
  '\t\t}\n',
  '\t\t\tv',
  '9ses',
  '->se',
  'ssio',
  'n_lo',
  'ck_t',
  'imeo',
  'ut =',
  ' (lo',
  'ng)o',
  'ptio',
  'n * ',
  'HZ;\n',
  '\t\t\tb',
  'reak',
  ';\n\n\t',
  '\tdef',
  'ault',
  ':\n\t\t',
  '\tcon',
  'tinu',
  'e;\n\t',
  '\t}\n\t',
  '}\n\nf',
  'ree_',
  'and_',
  'retu',
  'rn:\n',
  '\tkfr',
  'ee(t',
  'mp_o',
  'ptio',
  'ns);',
  '\nfai',
  'l_op',
  'tion',
  '_all',
  'oc:\n',
  '\tret',
  'urn ',
  'ret;',
  '\n}\n\n',
  '/**\n',
  ' * v',
  '9fs_',
  'sess',
  'ion_',
  'init',
  ' - i',
  'niti',
  'aliz',
  'e se',
  'ssio',
  'n\n *',
  ' @v9',
  'ses:',
  ' ses',
  'sion',
  ' inf',
  'orma',
  'tion',
  ' str',
  'uctu',
  're\n ',
  '* @d',
  'ev_n',
  'ame:',
  ' dev',
  'ice ',
  'bein',
  'g mo',
  'unte',
  'd\n *',
  ' @da',
  'ta: ',
  'opti',
  'ons\n',
  ' *\n ',
  '*/\n\n',
  'stru',
  'ct p',
  '9_fi',
  'd *v',
  '9fs_',
  'sess',
  'ion_',
  'init',
  '(str',
  'uct ',
  'v9fs',
  '_ses',
  'sion',
  '_inf',
  'o *v',
  '9ses',
  ',\n\t\t',
  '  co',
  'nst ',
  'char',
  ' *de',
  'v_na',
  'me, ',
  'char',
  ' *da',
  'ta)\n',
  '{\n\ts',
  'truc',
  't p9',
  '_fid',
  ' *fi',
  'd;\n\t',
  'int ',
  'rc =',
  ' -EN',
  'OMEM',
  ';\n\n\t',
  'v9se',
  's->u',
  'name',
  ' = k',
  'strd',
  'up(V',
  '9FS_',
  'DEFU',
  'SER,',
  ' GFP',
  '_KER',
  'NEL)',
  ';\n\ti',
  'f (!',
  'v9se',
  's->u',
  'name',
  ')\n\t\t',
  'goto',
  ' err',
  '_nam',
  'es;\n',
  '\n\tv9',
  'ses-',
  '>ana',
  'me =',
  ' kst',
  'rdup',
  '(V9F',
  'S_DE',
  'FANA',
  'ME, ',
  'GFP_',
  'KERN',
  'EL);',
  '\n\tif',
  ' (!v',
  '9ses',
  '->an',
  'ame)',
  '\n\t\tg',
  'oto ',
  'err_',
  'name',
  's;\n\t',
  'init',
  '_rws',
  'em(&',
  'v9se',
  's->r',
  'enam',
  'e_se',
  'm);\n',
  '\n\tv9',
  'ses-',
  '>uid',
  ' = I',
  'NVAL',
  'ID_U',
  'ID;\n',
  '\tv9s',
  'es->',
  'dflt',
  'uid ',
  '= V9',
  'FS_D',
  'EFUI',
  'D;\n\t',
  'v9se',
  's->d',
  'fltg',
  'id =',
  ' V9F',
  'S_DE',
  'FGID',
  ';\n\n\t',
  'v9se',
  's->c',
  'lnt ',
  '= p9',
  '_cli',
  'ent_',
  'crea',
  'te(d',
  'ev_n',
  'ame,',
  ' dat',
  'a);\n',
  '\tif ',
  '(IS_',
  'ERR(',
  'v9se',
  's->c',
  'lnt)',
  ') {\n',
  '\t\trc',
  ' = P',
  'TR_E',
  'RR(v',
  '9ses',
  '->cl',
  'nt);',
  '\n\t\tp',
  '9_de',
  'bug(',
  'P9_D',
  'EBUG',
  '_ERR',
  'OR, ',
  '"pro',
  'blem',
  ' ini',
  'tial',
  'izin',
  'g 9p',
  ' cli',
  'ent\n',
  '");\n',
  '\t\tgo',
  'to e',
  'rr_n',
  'ames',
  ';\n\t}',
  '\n\n\tv',
  '9ses',
  '->fl',
  'ags ',
  '= V9',
  'FS_A',
  'CCES',
  'S_US',
  'ER;\n',
  '\n\tif',
  ' (p9',
  '_is_',
  'prot',
  'o_do',
  'tl(v',
  '9ses',
  '->cl',
  'nt))',
  ' {\n\t',
  '\tv9s',
  'es->',
  'flag',
  's = ',
  'V9FS',
  '_ACC',
  'ESS_',
  'CLIE',
  'NT;\n',
  '\t\tv9',
  'ses-',
  '>fla',
  'gs |',
  '= V9',
  'FS_P',
  'ROTO',
  '_200',
  '0L;\n',
  '\t} e',
  'lse ',
  'if (',
  'p9_i',
  's_pr',
  'oto_',
  'dotu',
  '(v9s',
  'es->',
  'clnt',
  ')) {',
  '\n\t\tv',
  '9ses',
  '->fl',
  'ags ',
  '|= V',
  '9FS_',
  'PROT',
  'O_20',
  '00U;',
  '\n\t}\n',
  '\n\trc',
  ' = v',
  '9fs_',
  'pars',
  'e_op',
  'tion',
  's(v9',
  'ses,',
  ' dat',
  'a);\n',
  '\tif ',
  '(rc ',
  '< 0)',
  '\n\t\tg',
  'oto ',
  'err_',
  'clnt',
  ';\n\n\t',
  'v9se',
  's->m',
  'axda',
  'ta =',
  ' v9s',
  'es->',
  'clnt',
  '->ms',
  'ize ',
  '- P9',
  '_IOH',
  'DRSZ',
  ';\n\n\t',
  'if (',
  '!v9f',
  's_pr',
  'oto_',
  'dotl',
  '(v9s',
  'es) ',
  '&&\n\t',
  '    ',
  '((v9',
  'ses-',
  '>fla',
  'gs &',
  ' V9F',
  'S_AC',
  'CESS',
  '_MAS',
  'K) =',
  '= V9',
  'FS_A',
  'CCES',
  'S_CL',
  'IENT',
  ')) {',
  '\n\t\t/',
  '*\n\t\t',
  ' * W',
  'e su',
  'ppor',
  't AC',
  'CESS',
  '_CLI',
  'ENT ',
  'only',
  ' for',
  ' dot',
  'l.\n\t',
  '\t * ',
  'Fall',
  ' bac',
  'k to',
  ' ACC',
  'ESS_',
  'USER',
  '\n\t\t ',
  '*/\n\t',
  '\tv9s',
  'es->',
  'flag',
  's &=',
  ' ~V9',
  'FS_A',
  'CCES',
  'S_MA',
  'SK;\n',
  '\t\tv9',
  'ses-',
  '>fla',
  'gs |',
  '= V9',
  'FS_A',
  'CCES',
  'S_US',
  'ER;\n',
  '\t}\n\t',
  '/*FI',
  'XME ',
  '!! *',
  '/\n\t/',
  '* fo',
  'r le',
  'gacy',
  ' mod',
  'e, f',
  'all ',
  'back',
  ' to ',
  'V9FS',
  '_ACC',
  'ESS_',
  'ANY ',
  '*/\n\t',
  'if (',
  '!(v9',
  'fs_p',
  'roto',
  '_dot',
  'u(v9',
  'ses)',
  ' || ',
  'v9fs',
  '_pro',
  'to_d',
  'otl(',
  'v9se',
  's)) ',
  '&&\n\t',
  '\t((v',
  '9ses',
  '->fl',
  'ags&',
  'V9FS',
  '_ACC',
  'ESS_',
  'MASK',
  ') ==',
  ' V9F',
  'S_AC',
  'CESS',
  '_USE',
  'R)) ',
  '{\n\n\t',
  '\tv9s',
  'es->',
  'flag',
  's &=',
  ' ~V9',
  'FS_A',
  'CCES',
  'S_MA',
  'SK;\n',
  '\t\tv9',
  'ses-',
  '>fla',
  'gs |',
  '= V9',
  'FS_A',
  'CCES',
  'S_AN',
  'Y;\n\t',
  '\tv9s',
  'es->',
  'uid ',
  '= IN',
  'VALI',
  'D_UI',
  'D;\n\t',
  '}\n\ti',
  'f (!',
  'v9fs',
  '_pro',
  'to_d',
  'otl(',
  'v9se',
  's) |',
  '|\n\t\t',
  '!((v',
  '9ses',
  '->fl',
  'ags ',
  '& V9',
  'FS_A',
  'CCES',
  'S_MA',
  'SK) ',
  '== V',
  '9FS_',
  'ACCE',
  'SS_C',
  'LIEN',
  'T)) ',
  '{\n\t\t',
  '/*\n\t',
  '\t * ',
  'We s',
  'uppo',
  'rt A',
  'CL c',
  'heck',
  's on',
  ' cli',
  'net ',
  'only',
  ' if ',
  'the ',
  'prot',
  'ocol',
  ' is\n',
  '\t\t *',
  ' 9P2',
  '000.',
  'L an',
  'd ac',
  'cess',
  ' is ',
  'V9FS',
  '_ACC',
  'ESS_',
  'CLIE',
  'NT.\n',
  '\t\t *',
  '/\n\t\t',
  'v9se',
  's->f',
  'lags',
  ' &= ',
  '~V9F',
  'S_AC',
  'L_MA',
  'SK;\n',
  '\t}\n\n',
  '\tfid',
  ' = p',
  '9_cl',
  'ient',
  '_att',
  'ach(',
  'v9se',
  's->c',
  'lnt,',
  ' NUL',
  'L, v',
  '9ses',
  '->un',
  'ame,',
  ' INV',
  'ALID',
  '_UID',
  ',\n\t\t',
  '\t\t\t\t',
  '\tv9s',
  'es->',
  'anam',
  'e);\n',
  '\tif ',
  '(IS_',
  'ERR(',
  'fid)',
  ') {\n',
  '\t\trc',
  ' = P',
  'TR_E',
  'RR(f',
  'id);',
  '\n\t\tp',
  '9_de',
  'bug(',
  'P9_D',
  'EBUG',
  '_ERR',
  'OR, ',
  '"can',
  'not ',
  'atta',
  'ch\n"',
  ');\n\t',
  '\tgot',
  'o er',
  'r_cl',
  'nt;\n',
  '\t}\n\n',
  '\tif ',
  '((v9',
  'ses-',
  '>fla',
  'gs &',
  ' V9F',
  'S_AC',
  'CESS',
  '_MAS',
  'K) =',
  '= V9',
  'FS_A',
  'CCES',
  'S_SI',
  'NGLE',
  ')\n\t\t',
  'fid-',
  '>uid',
  ' = v',
  '9ses',
  '->ui',
  'd;\n\t',
  'else',
  '\n\t\tf',
  'id->',
  'uid ',
  '= IN',
  'VALI',
  'D_UI',
  'D;\n\n',
  '#ifd',
  'ef C',
  'ONFI',
  'G_9P',
  '_FSC',
  'ACHE',
  '\n\t/*',
  ' reg',
  'iste',
  'r th',
  'e se',
  'ssio',
  'n fo',
  'r ca',
  'chin',
  'g */',
  '\n\tv9',
  'fs_c',
  'ache',
  '_ses',
  'sion',
  '_get',
  '_coo',
  'kie(',
  'v9se',
  's);\n',
  '#end',
  'if\n\t',
  'spin',
  '_loc',
  'k(&v',
  '9fs_',
  'sess',
  'ionl',
  'ist_',
  'lock',
  ');\n\t',
  'list',
  '_add',
  '(&v9',
  'ses-',
  '>sli',
  'st, ',
  '&v9f',
  's_se',
  'ssio',
  'nlis',
  't);\n',
  '\tspi',
  'n_un',
  'lock',
  '(&v9',
  'fs_s',
  'essi',
  'onli',
  'st_l',
  'ock)',
  ';\n\n\t',
  'retu',
  'rn f',
  'id;\n',
  '\nerr',
  '_cln',
  't:\n#',
  'ifde',
  'f CO',
  'NFIG',
  '_9P_',
  'FSCA',
  'CHE\n',
  '\tkfr',
  'ee(v',
  '9ses',
  '->ca',
  'chet',
  'ag);',
  '\n#en',
  'dif\n',
  '\tp9_',
  'clie',
  'nt_d',
  'estr',
  'oy(v',
  '9ses',
  '->cl',
  'nt);',
  '\nerr',
  '_nam',
  'es:\n',
  '\tkfr',
  'ee(v',
  '9ses',
  '->un',
  'ame)',
  ';\n\tk',
  'free',
  '(v9s',
  'es->',
  'anam',
  'e);\n',
  '\tret',
  'urn ',
  'ERR_',
  'PTR(',
  'rc);',
  '\n}\n\n',
  '/**\n',
  ' * v',
  '9fs_',
  'sess',
  'ion_',
  'clos',
  'e - ',
  'shut',
  'down',
  ' a s',
  'essi',
  'on\n ',
  '* @v',
  '9ses',
  ': se',
  'ssio',
  'n in',
  'form',
  'atio',
  'n st',
  'ruct',
  'ure\n',
  ' *\n ',
  '*/\n\n',
  'void',
  ' v9f',
  's_se',
  'ssio',
  'n_cl',
  'ose(',
  'stru',
  'ct v',
  '9fs_',
  'sess',
  'ion_',
  'info',
  ' *v9',
  'ses)',
  '\n{\n\t',
  'if (',
  'v9se',
  's->c',
  'lnt)',
  ' {\n\t',
  '\tp9_',
  'clie',
  'nt_d',
  'estr',
  'oy(v',
  '9ses',
  '->cl',
  'nt);',
  '\n\t\tv',
  '9ses',
  '->cl',
  'nt =',
  ' NUL',
  'L;\n\t',
  '}\n\n#',
  'ifde',
  'f CO',
  'NFIG',
  '_9P_',
  'FSCA',
  'CHE\n',
  '\tif ',
  '(v9s',
  'es->',
  'fsca',
  'che)',
  ' {\n\t',
  '\tv9f',
  's_ca',
  'che_',
  'sess',
  'ion_',
  'put_',
  'cook',
  'ie(v',
  '9ses',
  ');\n\t',
  '\tkfr',
  'ee(v',
  '9ses',
  '->ca',
  'chet',
  'ag);',
  '\n\t}\n',
  '#end',
  'if\n\t',
  'kfre',
  'e(v9',
  'ses-',
  '>una',
  'me);',
  '\n\tkf',
  'ree(',
  'v9se',
  's->a',
  'name',
  ');\n\n',
  '\tspi',
  'n_lo',
  'ck(&',
  'v9fs',
  '_ses',
  'sion',
  'list',
  '_loc',
  'k);\n',
  '\tlis',
  't_de',
  'l(&v',
  '9ses',
  '->sl',
  'ist)',
  ';\n\ts',
  'pin_',
  'unlo',
  'ck(&',
  'v9fs',
  '_ses',
  'sion',
  'list',
  '_loc',
  'k);\n',
  '}\n\n/',
  '**\n ',
  '* v9',
  'fs_s',
  'essi',
  'on_c',
  'ance',
  'l - ',
  'term',
  'inat',
  'e a ',
  'sess',
  'ion\n',
  ' * @',
  'v9se',
  's: s',
  'essi',
  'on t',
  'o te',
  'rmin',
  'ate\n',
  ' *\n ',
  '* ma',
  'rk t',
  'rans',
  'port',
  ' as ',
  'disc',
  'onne',
  'cted',
  ' and',
  ' can',
  'cel ',
  'all ',
  'pend',
  'ing ',
  'requ',
  'ests',
  '.\n *',
  '/\n\nv',
  'oid ',
  'v9fs',
  '_ses',
  'sion',
  '_can',
  'cel(',
  'stru',
  'ct v',
  '9fs_',
  'sess',
  'ion_',
  'info',
  ' *v9',
  'ses)',
  ' {\n\t',
  'p9_d',
  'ebug',
  '(P9_',
  'DEBU',
  'G_ER',
  'ROR,',
  ' "ca',
  'ncel',
  ' ses',
  'sion',
  ' %p\n',
  '", v',
  '9ses',
  ');\n\t',
  'p9_c',
  'lien',
  't_di',
  'scon',
  'nect',
  '(v9s',
  'es->',
  'clnt',
  ');\n}',
  '\n\n/*',
  '*\n *',
  ' v9f',
  's_se',
  'ssio',
  'n_be',
  'gin_',
  'canc',
  'el -',
  ' Beg',
  'in t',
  'ermi',
  'nate',
  ' of ',
  'a se',
  'ssio',
  'n\n *',
  ' @v9',
  'ses:',
  ' ses',
  'sion',
  ' to ',
  'term',
  'inat',
  'e\n *',
  '\n * ',
  'Afte',
  'r th',
  'is c',
  'all ',
  'we d',
  "on't",
  ' all',
  'ow a',
  'ny r',
  'eque',
  'st o',
  'ther',
  ' tha',
  'n cl',
  'unk.',
  '\n */',
  '\n\nvo',
  'id v',
  '9fs_',
  'sess',
  'ion_',
  'begi',
  'n_ca',
  'ncel',
  '(str',
  'uct ',
  'v9fs',
  '_ses',
  'sion',
  '_inf',
  'o *v',
  '9ses',
  ')\n{\n',
  '\tp9_',
  'debu',
  'g(P9',
  '_DEB',
  'UG_E',
  'RROR',
  ', "b',
  'egin',
  ' can',
  'cel ',
  'sess',
  'ion ',
  '%p\n"',
  ', v9',
  'ses)',
  ';\n\tp',
  '9_cl',
  'ient',
  '_beg',
  'in_d',
  'isco',
  'nnec',
  't(v9',
  'ses-',
  '>cln',
  't);\n',
  '}\n\ne',
  'xter',
  'n in',
  't v9',
  'fs_e',
  'rror',
  '_ini',
  't(vo',
  'id);',
  '\n\nst',
  'atic',
  ' str',
  'uct ',
  'kobj',
  'ect ',
  '*v9f',
  's_ko',
  'bj;\n',
  '\n#if',
  'def ',
  'CONF',
  'IG_9',
  'P_FS',
  'CACH',
  'E\n/*',
  '*\n *',
  ' cac',
  'hes_',
  'show',
  ' - l',
  'ist ',
  'cach',
  'es a',
  'ssoc',
  'iate',
  'd wi',
  'th a',
  ' ses',
  'sion',
  '\n *\n',
  ' * R',
  'etur',
  'ns t',
  'he s',
  'ize ',
  'of b',
  'uffe',
  'r wr',
  'itte',
  'n.\n ',
  '*/\n\n',
  'stat',
  'ic s',
  'size',
  '_t c',
  'ache',
  's_sh',
  'ow(s',
  'truc',
  't ko',
  'bjec',
  't *k',
  'obj,',
  '\n\t\t\t',
  '   s',
  'truc',
  't ko',
  'bj_a',
  'ttri',
  'bute',
  ' *at',
  'tr,\n',
  '\t\t\t ',
  '  ch',
  'ar *',
  'buf)',
  '\n{\n\t',
  'ssiz',
  'e_t ',
  'n = ',
  '0, c',
  'ount',
  ' = 0',
  ', li',
  'mit ',
  '= PA',
  'GE_S',
  'IZE;',
  '\n\tst',
  'ruct',
  ' v9f',
  's_se',
  'ssio',
  'n_in',
  'fo *',
  'v9se',
  's;\n\n',
  '\tspi',
  'n_lo',
  'ck(&',
  'v9fs',
  '_ses',
  'sion',
  'list',
  '_loc',
  'k);\n',
  '\tlis',
  't_fo',
  'r_ea',
  'ch_e',
  'ntry',
  '(v9s',
  'es, ',
  '&v9f',
  's_se',
  'ssio',
  'nlis',
  't, s',
  'list',
  ') {\n',
  '\t\tif',
  ' (v9',
  'ses-',
  '>cac',
  'heta',
  'g) {',
  '\n\t\t\t',
  'n = ',
  'snpr',
  'intf',
  '(buf',
  ', li',
  'mit,',
  ' "%s',
  '\n", ',
  'v9se',
  's->c',
  'ache',
  'tag)',
  ';\n\t\t',
  '\tif ',
  '(n <',
  ' 0) ',
  '{\n\t\t',
  '\t\tco',
  'unt ',
  '= n;',
  '\n\t\t\t',
  '\tbre',
  'ak;\n',
  '\t\t\t}',
  '\n\n\t\t',
  '\tcou',
  'nt +',
  '= n;',
  '\n\t\t\t',
  'limi',
  't -=',
  ' n;\n',
  '\t\t}\n',
  '\t}\n\n',
  '\tspi',
  'n_un',
  'lock',
  '(&v9',
  'fs_s',
  'essi',
  'onli',
  'st_l',
  'ock)',
  ';\n\tr',
  'etur',
  'n co',
  'unt;',
  '\n}\n\n',
  'stat',
  'ic s',
  'truc',
  't ko',
  'bj_a',
  'ttri',
  'bute',
  ' v9f',
  's_at',
  'tr_c',
  'ache',
  ' = _',
  '_ATT',
  'R_RO',
  '(cac',
  'hes)',
  ';\n#e',
  'ndif',
  ' /* ',
  'CONF',
  'IG_9',
  'P_FS',
  'CACH',
  'E */',
  '\n\nst',
  'atic',
  ' str',
  'uct ',
  'attr',
  'ibut',
  'e *v',
  '9fs_',
  'attr',
  's[] ',
  '= {\n',
  '#ifd',
  'ef C',
  'ONFI',
  'G_9P',
  '_FSC',
  'ACHE',
  '\n\t&v',
  '9fs_',
  'attr',
  '_cac',
  'he.a',
  'ttr,',
  '\n#en',
  'dif\n',
  '\tNUL',
  'L,\n}',
  ';\n\ns',
  'tati',
  'c st',
  'ruct',
  ' att',
  'ribu',
  'te_g',
  'roup',
  ' v9f',
  's_at',
  'tr_g',
  'roup',
  ' = {',
  '\n\t.a',
  'ttrs',
  ' = v',
  '9fs_',
  'attr',
  's,\n}',
  ';\n\n/',
  '**\n ',
  '* v9',
  'fs_s',
  'ysfs',
  '_ini',
  't - ',
  'Init',
  'iali',
  'ze t',
  'he v',
  '9fs ',
  'sysf',
  's in',
  'terf',
  'ace\n',
  ' *\n ',
  '*/\n\n',
  'stat',
  'ic i',
  'nt _',
  '_ini',
  't v9',
  'fs_s',
  'ysfs',
  '_ini',
  't(vo',
  'id)\n',
  '{\n\tv',
  '9fs_',
  'kobj',
  ' = k',
  'obje',
  'ct_c',
  'reat',
  'e_an',
  'd_ad',
  'd("9',
  'p", ',
  'fs_k',
  'obj)',
  ';\n\ti',
  'f (!',
  'v9fs',
  '_kob',
  'j)\n\t',
  '\tret',
  'urn ',
  '-ENO',
  'MEM;',
  '\n\n\ti',
  'f (s',
  'ysfs',
  '_cre',
  'ate_',
  'grou',
  'p(v9',
  'fs_k',
  'obj,',
  ' &v9',
  'fs_a',
  'ttr_',
  'grou',
  'p)) ',
  '{\n\t\t',
  'kobj',
  'ect_',
  'put(',
  'v9fs',
  '_kob',
  'j);\n',
  '\t\tre',
  'turn',
  ' -EN',
  'OMEM',
  ';\n\t}',
  '\n\n\tr',
  'etur',
  'n 0;',
  '\n}\n\n',
  '/**\n',
  ' * v',
  '9fs_',
  'sysf',
  's_cl',
  'eanu',
  'p - ',
  'Unre',
  'gist',
  'er t',
  'he v',
  '9fs ',
  'sysf',
  's in',
  'terf',
  'ace\n',
  ' *\n ',
  '*/\n\n',
  'stat',
  'ic v',
  'oid ',
  'v9fs',
  '_sys',
  'fs_c',
  'lean',
  'up(v',
  'oid)',
  '\n{\n\t',
  'sysf',
  's_re',
  'move',
  '_gro',
  'up(v',
  '9fs_',
  'kobj',
  ', &v',
  '9fs_',
  'attr',
  '_gro',
  'up);',
  '\n\tko',
  'bjec',
  't_pu',
  't(v9',
  'fs_k',
  'obj)',
  ';\n}\n',
  '\nsta',
  'tic ',
  'void',
  ' v9f',
  's_in',
  'ode_',
  'init',
  '_onc',
  'e(vo',
  'id *',
  'foo)',
  '\n{\n\t',
  'stru',
  'ct v',
  '9fs_',
  'inod',
  'e *v',
  '9ino',
  'de =',
  ' (st',
  'ruct',
  ' v9f',
  's_in',
  'ode ',
  '*)fo',
  'o;\n#',
  'ifde',
  'f CO',
  'NFIG',
  '_9P_',
  'FSCA',
  'CHE\n',
  '\tv9i',
  'node',
  '->fs',
  'cach',
  'e = ',
  'NULL',
  ';\n#e',
  'ndif',
  '\n\tme',
  'mset',
  '(&v9',
  'inod',
  'e->q',
  'id, ',
  '0, s',
  'izeo',
  'f(v9',
  'inod',
  'e->q',
  'id))',
  ';\n\ti',
  'node',
  '_ini',
  't_on',
  'ce(&',
  'v9in',
  'ode-',
  '>vfs',
  '_ino',
  'de);',
  '\n}\n\n',
  '/**\n',
  ' * v',
  '9fs_',
  'init',
  '_ino',
  'de_c',
  'ache',
  ' - i',
  'niti',
  'aliz',
  'e a ',
  'cach',
  'e fo',
  'r 9P',
  '\n * ',
  'Retu',
  'rns ',
  '0 on',
  ' suc',
  'cess',
  '.\n *',
  '/\nst',
  'atic',
  ' int',
  ' v9f',
  's_in',
  'it_i',
  'node',
  '_cac',
  'he(v',
  'oid)',
  '\n{\n\t',
  'v9fs',
  '_ino',
  'de_c',
  'ache',
  ' = k',
  'mem_',
  'cach',
  'e_cr',
  'eate',
  '("v9',
  'fs_i',
  'node',
  '_cac',
  'he",',
  '\n\t\t\t',
  '\t\t  ',
  'size',
  'of(s',
  'truc',
  't v9',
  'fs_i',
  'node',
  '),\n\t',
  '\t\t\t\t',
  '  0,',
  ' (SL',
  'AB_R',
  'ECLA',
  'IM_A',
  'CCOU',
  'NT|\n',
  '\t\t\t\t',
  '\t   ',
  '   S',
  'LAB_',
  'MEM_',
  'SPRE',
  'AD|S',
  'LAB_',
  'ACCO',
  'UNT)',
  ',\n\t\t',
  '\t\t\t ',
  ' v9f',
  's_in',
  'ode_',
  'init',
  '_onc',
  'e);\n',
  '\tif ',
  '(!v9',
  'fs_i',
  'node',
  '_cac',
  'he)\n',
  '\t\tre',
  'turn',
  ' -EN',
  'OMEM',
  ';\n\n\t',
  'retu',
  'rn 0',
  ';\n}\n',
  '\n/**',
  '\n * ',
  'v9fs',
  '_des',
  'troy',
  '_ino',
  'de_c',
  'ache',
  ' - d',
  'estr',
  'oy t',
  'he c',
  'ache',
  ' of ',
  '9P i',
  'node',
  '\n *\n',
  ' */\n',
  'stat',
  'ic v',
  'oid ',
  'v9fs',
  '_des',
  'troy',
  '_ino',
  'de_c',
  'ache',
  '(voi',
  'd)\n{',
  '\n\t/*',
  '\n\t *',
  ' Mak',
  'e su',
  're a',
  'll d',
  'elay',
  'ed r',
  'cu f',
  'ree ',
  'inod',
  'es a',
  're f',
  'lush',
  'ed b',
  'efor',
  'e we',
  '\n\t *',
  ' des',
  'troy',
  ' cac',
  'he.\n',
  '\t */',
  '\n\trc',
  'u_ba',
  'rrie',
  'r();',
  '\n\tkm',
  'em_c',
  'ache',
  '_des',
  'troy',
  '(v9f',
  's_in',
  'ode_',
  'cach',
  'e);\n',
  '}\n\ns',
  'tati',
  'c in',
  't v9',
  'fs_c',
  'ache',
  '_reg',
  'iste',
  'r(vo',
  'id)\n',
  '{\n\ti',
  'nt r',
  'et;\n',
  '\tret',
  ' = v',
  '9fs_',
  'init',
  '_ino',
  'de_c',
  'ache',
  '();\n',
  '\tif ',
  '(ret',
  ' < 0',
  ')\n\t\t',
  'retu',
  'rn r',
  'et;\n',
  '#ifd',
  'ef C',
  'ONFI',
  'G_9P',
  '_FSC',
  'ACHE',
  '\n\tre',
  't = ',
  'fsca',
  'che_',
  'regi',
  'ster',
  '_net',
  'fs(&',
  'v9fs',
  '_cac',
  'he_n',
  'etfs',
  ');\n\t',
  'if (',
  'ret ',
  '< 0)',
  '\n\t\tv',
  '9fs_',
  'dest',
  'roy_',
  'inod',
  'e_ca',
  'che(',
  ');\n#',
  'endi',
  'f\n\tr',
  'etur',
  'n re',
  't;\n}',
  '\n\nst',
  'atic',
  ' voi',
  'd v9',
  'fs_c',
  'ache',
  '_unr',
  'egis',
  'ter(',
  'void',
  ')\n{\n',
  '\tv9f',
  's_de',
  'stro',
  'y_in',
  'ode_',
  'cach',
  'e();',
  '\n#if',
  'def ',
  'CONF',
  'IG_9',
  'P_FS',
  'CACH',
  'E\n\tf',
  'scac',
  'he_u',
  'nreg',
  'iste',
  'r_ne',
  'tfs(',
  '&v9f',
  's_ca',
  'che_',
  'netf',
  's);\n',
  '#end',
  'if\n}',
  '\n\n/*',
  '*\n *',
  ' ini',
  't_v9',
  'fs -',
  ' Ini',
  'tial',
  'ize ',
  'modu',
  'le\n ',
  '*\n *',
  '/\n\ns',
  'tati',
  'c in',
  't __',
  'init',
  ' ini',
  't_v9',
  'fs(v',
  'oid)',
  '\n{\n\t',
  'int ',
  'err;',
  '\n\tpr',
  '_inf',
  'o("I',
  'nsta',
  'llin',
  'g v9',
  'fs 9',
  'p200',
  '0 fi',
  'le s',
  'yste',
  'm su',
  'ppor',
  't\n")',
  ';\n\t/',
  '* TO',
  'DO: ',
  'Setu',
  'p li',
  'st o',
  'f re',
  'gist',
  'ered',
  ' tra',
  'snpo',
  'rt m',
  'odul',
  'es *',
  '/\n\n\t',
  'err ',
  '= v9',
  'fs_c',
  'ache',
  '_reg',
  'iste',
  'r();',
  '\n\tif',
  ' (er',
  'r < ',
  '0) {',
  '\n\t\tp',
  'r_er',
  'r("F',
  'aile',
  'd to',
  ' reg',
  'iste',
  'r v9',
  'fs f',
  'or c',
  'achi',
  'ng\n"',
  ');\n\t',
  '\tret',
  'urn ',
  'err;',
  '\n\t}\n',
  '\n\ter',
  'r = ',
  'v9fs',
  '_sys',
  'fs_i',
  'nit(',
  ');\n\t',
  'if (',
  'err ',
  '< 0)',
  ' {\n\t',
  '\tpr_',
  'err(',
  '"Fai',
  'led ',
  'to r',
  'egis',
  'ter ',
  'with',
  ' sys',
  'fs\n"',
  ');\n\t',
  '\tgot',
  'o ou',
  't_ca',
  'che;',
  '\n\t}\n',
  '\terr',
  ' = r',
  'egis',
  'ter_',
  'file',
  'syst',
  'em(&',
  'v9fs',
  '_fs_',
  'type',
  ');\n\t',
  'if (',
  'err ',
  '< 0)',
  ' {\n\t',
  '\tpr_',
  'err(',
  '"Fai',
  'led ',
  'to r',
  'egis',
  'ter ',
  'file',
  'syst',
  'em\n"',
  ');\n\t',
  '\tgot',
  'o ou',
  't_sy',
  'sfs_',
  'clea',
  'nup;',
  '\n\t}\n',
  '\n\tre',
  'turn',
  ' 0;\n',
  '\nout',
  '_sys',
  'fs_c',
  'lean',
  'up:\n',
  '\tv9f',
  's_sy',
  'sfs_',
  'clea',
  'nup(',
  ');\n\n',
  'out_',
  'cach',
  'e:\n\t',
  'v9fs',
  '_cac',
  'he_u',
  'nreg',
  'iste',
  'r();',
  '\n\n\tr',
  'etur',
  'n er',
  'r;\n}',
  '\n\n/*',
  '*\n *',
  ' exi',
  't_v9',
  'fs -',
  ' shu',
  'tdow',
  'n mo',
  'dule',
  '\n *\n',
  ' */\n',
  '\nsta',
  'tic ',
  'void',
  ' __e',
  'xit ',
  'exit',
  '_v9f',
  's(vo',
  'id)\n',
  '{\n\tv',
  '9fs_',
  'sysf',
  's_cl',
  'eanu',
  'p();',
  '\n\tv9',
  'fs_c',
  'ache',
  '_unr',
  'egis',
  'ter(',
  ');\n\t',
  'unre',
  'gist',
  'er_f',
  'iles',
  'yste',
  'm(&v',
  '9fs_',
  'fs_t',
  'ype)',
  ';\n}\n',
  '\nmod',
  'ule_',
  'init',
  '(ini',
  't_v9',
  'fs)\n',
  'modu',
  'le_e',
  'xit(',
  'exit',
  '_v9f',
  's)\n\n',
  'MODU',
  'LE_A',
  'UTHO',
  'R("L',
  'atch',
  'esar',
  ' Ion',
  'kov ',
  '<luc',
  'ho@i',
  'onko',
  'v.ne',
  't>")',
  ';\nMO',
  'DULE',
  '_AUT',
  'HOR(',
  '"Eri',
  'c Va',
  'n He',
  'nsbe',
  'rgen',
  ' <er',
  'icvh',
  '@gma',
  'il.c',
  'om>"',
  ');\nM',
  'ODUL',
  'E_AU',
  'THOR',
  '("Ro',
  'n Mi',
  'nnic',
  'h <r',
  'minn',
  'ich@',
  'lanl',
  '.gov',
  '>");',
  '\nMOD',
  'ULE_',
  'LICE',
  'NSE(',
  '"GPL',
  '");\n',
];
