function H(s){
        return s.split(',').map(function(r){
            return r.split('').map(function(v){
                return parseInt(v);
            });
        });
    }

/**
* dq
*
* iE 2010 dp dn
*
* iD bg B iC _u, iB 2.0 (B "_u");
* iA dm fq iz this iy ix in iw with B _u.
* iv dm iu a ir of B _u bf
*
*   fp://iq.ip.org/io/im-2.0
*
* il required _Q ik ij dl ii _l in ih, ig
* dk bg B _u is dk dj ie "AS IS" ic,
* ib ia i_ i$ hZ hY hX, hW hV dl hU.
* hT B _u for B hS language hR hQ _N
* hP bg B _u.
*
* @hO dp dn
*/
/** @constructor */
function dq() {
    //--------------------------------------------------------------------------
    //
    //  lF String Methods
    //
    //--------------------------------------------------------------------------

    /**
    * lE a di hN hM B hL
    * @hK hN Array of B di values, lD elements 0 - 23 dh
    *                a: lC
    *                b: lB
    *                c: lA
    *                d: lz
    *                e: ly
    *                f: lx
    *                g: fo
    *                h: dg
    *                i: lw
    *                j: lv
    *                k: lu
    *                l: lt
    *                m: ls
    *                n: lr
    *                o: lq
    *                p: lp
    *                q: lo
    *                r: ln
    *                s: lm
    *                t: ll
    *                u: lk
    *                v: lj
    *                w: li
    *                x: fn
    * @return aA B hJ lh lg
    */
    this.hI = function(values){
        for(var i = 0 ; i < 24 ; i++){
            this[String.fromCharCode(97 + i)] = values[i] || 0;
        }

        // I hH this df from B reset(1) function
        if (this.c < 0.01) {
            this.c = 0.01;
        }

        var bd = this.b + this.c + this.e;
        if (bd < 0.18) {
            var ab = 0.18 / bd;
            this.b *= ab;
            this.c *= ab;
            this.e *= ab;
        }
    };
}

/**
* fm
*
* iE 2010 dp dn
*
* iD bg B iC _u, iB 2.0 (B "_u");
* iA dm fq iz this iy ix in iw with B _u.
* iv dm iu a ir of B _u bf
*
*   fp://iq.ip.org/io/im-2.0
*
* il required _Q ik ij dl ii _l in ih, ig
* dk bg B _u is dk dj ie "AS IS" ic,
* ib ia i_ i$ hZ hY hX, hW hV dl hU.
* hT B _u for B hS language hR hQ _N
* hP bg B _u.
*
* @hO dp dn
*/
/** @constructor */
function fm() {
    // le hG dh ld lc az function lb

    //--------------------------------------------------------------------------
    //
    //  la l_
    //
    //--------------------------------------------------------------------------

    this.bV = new dq();  // l$ kZ

    //--------------------------------------------------------------------------
    //
    //  hF kY
    //
    //--------------------------------------------------------------------------

    var bU, // de of B attack bc
        bT, // de of B fl bc
        bS, // de of B hE bc

        ay,          // hD of B O
        dd,       // kX dc aa bR hC (from fo)

        da,           // kW dg
        fk,      // fj in dg

        fi,    // fh _l d_ B note _Q
        fg,      // Counter for B note d_
        bb,     // hB B time hA this hz, B note kV

        a_,      // kU of _h kT kS in B hy O
        ff;       // fh _l d_ B hx _Q

    //--------------------------------------------------------------------------
    //
    //  hF Methods
    //
    //--------------------------------------------------------------------------

    /**
    * kR B kQ hG from B kP
    * kO kN bf B start (total reset) _N for B repeat d$ (kM reset)
    */
    this.fe = function() {
        // fd fc
        var p = this.bV;

        ay       = 100 / (p.f * p.f + 0.001);
        dd    = 100 / (p.g   * p.g   + 0.001);

        da        = 1 - p.h * p.h * p.h * 0.01;
        fk   = -p.i * p.i * p.i * 0.000001;

        if(!p.a){
            a_ = 0.5 - p.n / 2;
            ff  = -p.o * 0.00005;
        }

        fi = 1 + p.l * p.l * (p.l > 0 ? -0.9 : 10);
        fg   = 0;
        bb  = p.m == 1 ? 0 : (1 - p.m) * (1 - p.m) * 20000 + 32;
    };

    // I split B reset() function hM fb hw for kL kK
    this.hv = function() {
        this.fe();

        // fd fc
        var p = this.bV;

        // kJ B length is all kI kH df, kG else hH kF
        bU = p.b  * p.b  * 100000;
        bT = p.c * p.c * 100000;
        bS = p.e   * p.e   * 100000 + 12;
        // kE length of B volume kD (_N kC bR)
        // kB kA B length cZ kz ky _Q 3 kx kw kv fq ku B padding "==" ba kt encode
        return ((bU + bT + bS) / 3 | 0) * 3;
    };

    /**
    * ks B O _l B kr buffer hu
    * @hK buffer A hu _l write B O _l
    * @return aA B O is ht
    */
    this.hs = function(buffer, length) {
        // fd fc
        var p = this.bV;

        // aA B filters dh active
        var fa = p.s != 1 || p.v,
            // hr ab which hq B hp B O position cZ move
            ax = p.v * p.v * 0.1,

            // f_ of B high-_P cY ab
            f$ = 1 + p.w * 0.0003,

            // hr ab which hq B hp B O position cZ move
            a$ = p.s * p.s * p.s * 0.1,

            // f_ of B low-_P cY ab
            ho = 1 + p.t * 0.0001,

            // aA B low _P filter is active
            hn = p.s != 1,

            // fn * fn (for cX cW)
            hm = p.x * p.x,

            // kq frequency aa kp
            hl = p.g,

            // aA B b_ is active
            eZ = p.q || p.r,

            // fj in eY offset
            hk = p.r * p.r * p.r * 0.2,

            // cV offset for b_ d$
            eX = p.q * p.q * (p.q < 0 ? -1020 : 1020),

            // hB B time hA this hz, some of B    ko dh reset
            cU = p.p ? ((1 - p.p) * (1 - p.p) * 20000 | 0) + 32 : 0,

            // hj kn km (kl bf kk of fl)
            hi = p.d,

            // fh _l d_ B dc of B O _Q bf B kj of B bQ O
            eW = p.j / 2,

            // f_ bf which B bQ eY ki
            hh = p.k * p.k * 0.01,

            // hj K of O _l hg
            cT = p.a;

        var cS      = bU,     // de of B cR bP bc
            hf = 1 / bU, // (for cX cW)
            hd = 1 / bT, // (for cX cW)
            hc = 1 / bS; // (for cX cW)

        // kh kg which kf ke eV B O position cZ move
        var b$ = 5 / (1 + p.u * p.u * 20) * (0.01 + a$);
        if (b$ > 0.8) {
            b$ = 0.8;
        }
        b$ = 1 - b$;

        var cQ = 0,     // aA B bR has ht
            eU    = 0, // eT bc of B bP (attack, fl, hE, end)
            aZ     = 0, // eT time az cR kd bc
            aY   = 0, // eT volume of B bP
            cP      = 0, // hb O position ba high-_P filter
            bO = 0, // fj in low-_P O position, cO kc _Q B cY _N kb
            eS,       // ka low-_P O position
            aX      = 0, // hb O position ba low-_P filter
            _t,           // hD k_ _Q bQ
            _Z            = 0, // cV az B O
            _Y,            // k$ b_ offset, for jZ jY
            cN        = 0, // jX az B b_ buffer
            _M,                  // cV jW cO a Number from 0-1, _o for eV sin ha
            eR       = 0, // Counter for B jV
            _e,               // jU-aw jT 8 h_ cM jS aw, jR eQ _l get B super aw
            av,          // jQ aw jP _l B O
            eP     = 0; // cV az B bQ jO O

        // h$ of O values _o _l create B eQ of eY gZ O
        var bN = new Array(1024),

            // h$ of random values _o _l hg gY
            aW  = new Array(32);

        for (var i = bN.length; i--; ) {
            bN[i] = 0;
        }
        for (i = aW.length; i--; ) {
            aW[i] = F(-1, 1);
        }

        for (i = 0; i < length; i++) {
            if (cQ) {
                return i;
            }

            // jN every cU h_, jM jL B bR hL
            if (cU) {
                if (++eR >= cU) {
                    eR = 0;
                    this.fe();
                }
            }

            // aA bb is jK, jJ B pitch
            if (bb) {
                if (++fg >= bb) {
                    bb = 0;
                    ay *= fi;
                }
            }

            // jI _N apply dg
            da += fk;
            ay *= da;

            // jH for frequency jG gX low, _N hC B bR if a fo jF set
            if (ay > dd) {
                ay = dd;
                if (hl > 0) {
                    cQ = 1;
                }
            }

            _t = ay;

            // eO B bQ d$
            if (eW > 0) {
                eP += hh;
                _t *= 1 + sin(eP) * eW;
            }

            _t |= 0;
            if (_t < 8) {
                _t = 8;
            }

            // jE B hy hx
            if (!cT) {
                a_ += ff;
                if (a_ < 0) {
                    a_ = 0;
                } else if (a_ > 0.5) {
                    a_ = 0.5;
                }
            }

            // eN az B jD jC of B volume bP
            if (++aZ > cS) {
                aZ = 0;

                switch (++eU)  {
                    case 1:
                        cS = bT;
                        break;
                    case 2:
                        cS = bS;
                }
            }

            // jB B volume jA dj B position in B bP
            switch (eU) {
                case 0:
                    aY = aZ * hf;
                    break;
                case 1:
                    aY = 1 + (1 - aZ * hd) * 2 * hi;
                    break;
                case 2:
                    aY = 1 - aZ * hc;
                    break;
                case 3:
                    aY = 0;
                    cQ = 1;
            }

            // eN B b_ offset
            if (eZ) {
                eX += hk;
                _Y = eX | 0;
                if (_Y < 0) {
                    _Y = -_Y;
                } else if (_Y > 1023) {
                    _Y = 1023;
                }
            }

            // eN B high-_P filter cY
            if (fa && f$) {
                ax *= f$;
                if (ax < 0.00001) {
                    ax = 0.00001;
                } else if (ax > 0.1) {
                    ax = 0.1;
                }
            }

            av = 0;
            for (var j = 8; j--; ) {
                // jz az B dc
                _Z++;
                if (_Z >= _t) {
                    _Z %= _t;

                    // jy new random gY for this dc
                    if (cT == 3) {
                        for (var n = aW.length; n--; ) {
                            aW[n] = F(-1, 1);
                        }
                    }
                }

                // jx B aw from B jw
                switch (cT) {
                    case 0: // jv O
                        _e = ((_Z / _t) < a_) ? 0.5 : -0.5;
                        break;
                    case 1: // ju O
                        _e = 1 - _Z / _t * 2;
                        break;
                    case 2: // jt O (eV _N js ha)
                        _M = _Z / _t;
                        _M = (_M > 0.5 ? _M - 1 : _M) * 6.28318531;
                        _e = 1.27323954 * _M + 0.405284735 * _M * _M * (_M < 0 ? 1 : -1);
                        _e = 0.225 * ((_e < 0 ? -1 : 1) * _e * _e  - _e) + _e;
                        break;
                    case 3: // jr
                        _e = aW[abs(_Z * 32 / _t | 0)];
                }

                // eO B low _N high _P filters
                if (fa) {
                    eS = aX;
                    a$ *= ho;
                    if (a$ < 0) {
                        a$ = 0;
                    } else if (a$ > 0.1) {
                        a$ = 0.1;
                    }

                    if (hn) {
                        bO += (_e - aX) * a$;
                        bO *= b$;
                    } else {
                        aX = _e;
                        bO = 0;
                    }

                    aX += bO;

                    cP += aX - eS;
                    cP *= 1 - ax;
                    _e = cP;
                }

                // eO B b_ d$
                if (eZ) {
                    bN[cN % 1024] = _e;
                    _e += bN[(cN - _Y + 1024) % 1024];
                    cN++;
                }

                av += _e;
            }

            // jq eQ B super eM _N jp jo
            av *= 0.125 * aY * hm;

            // jn if gX jm
            buffer[i] = av >= 1 ? 32767 : av <= -1 ? -32768 : av * 32767 | 0;
        }

        return length;
    };
}

// jl from fp://jk.jj/ji/
var cL = new fm();

// jh for B jg jf
var _L = function(di) {
    // gW dq
    cL.bV.hI(di);

    // je jd
    var eL = cL.hv();
    var aV = new Uint8Array(((eL + 1) / 2 | 0) * 4 + 44);
    var _o = cL.hs(new Uint16Array(aV.buffer, 44), eL) * 2;
    var _s = new Uint32Array(aV.buffer, 0, 44);

    // gW jc
    _s[0] = 0x46464952; // "RIFF"
    _s[1] = _o + 36;  // put total size df
    _s[2] = 0x45564157; // "WAVE"
    _s[3] = 0x20746D66; // "fmt "
    _s[4] = 0x00000010; // size of B jb
    _s[5] = 0x00010001; // ja: 1 channel, j_ format
    _s[6] = 0x0000AC44; // 44,100 eM cM gZ
    _s[7] = 0x00015888; // j$ rate: fb gV cM aw
    _s[8] = 0x00100002; // 16 iZ cM aw, iY dj every fb gV
    _s[9] = 0x61746164; // "aV"
    _s[10] = _o;      // put number of eM df

    // iX encoding iW _Q iV, @iU
    _o += 44;
    var i = 0,
        bM = /*nomangle*/'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'/*/nomangle*/,
        eK = /*nomangle*/'data:audio/wav;base64,'/*/nomangle*/;
    for (; i < _o; i += 3){
        var a = aV[i] << 16 | aV[i + 1] << 8 | aV[i + 2];
        eK += bM[a >> 18] + bM[a >> 12 & 63] + bM[a >> 6 & 63] + bM[a & 63];
    }

    var eJ = new Audio();
    eJ.src = eK;
    return eJ;
};

// iT all iS hw _l B global scope
Object.getOwnPropertyNames(Math).forEach(function(n){
    if(Math[n].call){
        this[n] = Math[n];
    }
});

function _d(w, h, f){
    var c = D.createElement('canvas');
    c.width = w;
    c.height = h;

    f(c.getContext('2d'), c);

    return c;
}

function eI(w, h, f){
    var c = _d(w, h, f);
    return c.getContext('2d').createPattern(c, 'repeat');
}

function eH(m, n){
    var r = [];
    for(var $ = 0 ; $ < m.length + n * 2 ; $++){
        r.push([]);
        for(var _ = 0 ; _ < m[0].length + n * 2 ; _++){
            if($ < n || $ >= m.length + n || _ < n || _ >= m[0].length + n){
                r[$][_] = 2;
            }else{
                r[$][_] = m[$ - n][_ - n];
            }
        }
    }
    return r;
}

function eG(m){
    var cK = [];
    m.forEach(function($){
        cK = cK.concat($);
    });
    return cK;
}

function eF(o){
    var r = {};
    for(var i in o){
        if(o[i].call){
            r[i] = o[i].bind(o);
        }
    }
    return r;
}

var D = document,
    w = window,
    _r = setTimeout,
    _k, // undefined _Q default
    C, // canvas
    R, // canvas context
    W, // world
    P, // player
    V, // camera
    PI = Math.PI,
    aU = navigator.userAgent.match(/*nomangle*//andro|ipho|ipa|ipo|windows ph/i/*/nomangle*/),
    J = aU ? 640 : 920,
    _c = 920;

var gU = _L([0,,0.1434,,0.1212,0.4471,,0.2511,,,,,,0.0426,,,,,0.8862,,,,,0.5]),
    gT = _L([1,,0.0713,,0.1467,0.5483,,-0.4465,,,,,,,,,,,1,,,0.0639,,0.5]),
    gS = _L([0,,0.0224,0.441,0.1886,0.6932,,,,,,,,,,,,,1,,,,,0.5]),
    gR = _L([2,0.28,0.45,,0.56,0.35,,0.4088,,,,,0.03,0.1557,,0.5565,-0.02,-0.02,1,,,,,0.5]),
    gQ = _L([3,,0.244,0.6411,0.2242,0.7416,,-0.2717,,,,0.0171,0.0346,,,,-0.0305,0.0244,1,,,0.0275,-0.0076,0.5]),
    gP = _L([0,,0.1394,,0.0864,0.48,,,,,,,,0.5326,,,,,1,,,0.1,,0.5]),
    gO = _L([2,0.03,0.1,0.14,0.25,0.54,0.3167,-0.02,0.3999,,0.05,,,0.1021,0.0684,,0.1287,-0.1816,1,,,,,0.46]),
    gN = _L([3,,0.0118,0.03,0.1681,0.565,,-0.2343,,,,0.26,0.6855,,,,,,1,,,,,0.2]),
    gM = _L([0,,0.2098,,0.4725,0.3665,,0.1895,,,,,,0.0067,,0.5437,,,1,,,,,0.45]);

function _K(s, c, cO, gL){
    var p, n = Y([0, 1]);

    // Add _l B list of bw
    G.add(p = {
        s: s,
        c: c,
        _g: function(){
            if(!V.bK(this.x, this.y, this.s)){
                return;
            }

            R.fillStyle = p.c;
            if(gL){
                fillText(n.toString(), p.x, p.y);
            }else{
                fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
            }
        }
    }, 1);

    // Interpolations
    cO.forEach(function(a, id){
        var eE = [p].concat(a);

        // Add B _A callback
        if(!id){
            eE[7] = function(){
                G._A(p);
            };
        }

        // Apply B interpolation
        N.apply(0, eE);
    });
}

var eD = eI(400, 400, function(r){
    with(r){
        fillStyle = '#000';
        fillRect(0, 0, 400, 400);

        fillStyle = '#fff';

        for(var x = 0 ; x < 400 ; x += 4){
            for(var y = 0 ; y < 400 ; y += 4){
                globalAlpha = F();
                fillRect(x, y, 4, 4);
            }
        }
    }
});

function au(s, gK, gJ){
    return _d(s, s, function(r){
        with(r){
            var g = createRadialGradient(
                s / 2, s / 2, 0,
                s / 2, s / 2, s / 2
            );

            g.addColorStop(0, gK);
            g.addColorStop(1, gJ);

            fillStyle = g;
            fillRect(0, 0, s, s);
        }
    });
}

var cJ = au(160, 'rgba(255,255,255,.25)', 'rgba(255,255,255,0)'),
    gI = au(160, 'rgba(255,0,0,.25)', 'rgba(255,0,0,0)'),
    gH = au(1000, 'rgba(0,0,0,0)', 'rgba(0,0,0,1)');

var
    cI = _d(80, 80, function(r){
        with(r){
            fillStyle = '#fff';
            beginPath();
            moveTo(0, 0);
            lineTo(80, 80 / 2);
            lineTo(0, 80);
            fill();
        }
    }),
    gG = _d(80, 80, function(r){
        with(r){
            translate(80, 0);
            scale(-1, 1);
            drawImage(cI, 0, 0);
        }
    }),
    gF = _d(80, 80, function(r){
        with(r){
            translate(0, 80);
            rotate(-PI / 2);

            drawImage(cI, 0, 0);
        }
    }),
    gE = _d(80, 80, function(r){
        with(r){
            fillStyle = '#fff';
            beginPath();
            arc(80 / 2, 80 / 2, 80 / 2, 0, PI * 2, 1);
            fill();
        }
    })
    ;

var cH = {
    /*nomangle*/a/*/nomangle*/: H("111,101,111,101,101"),
    /*nomangle*/b/*/nomangle*/: H("111,101,110,101,111"),
    /*nomangle*/c/*/nomangle*/: H("111,100,100,100,111"),
    /*nomangle*/d/*/nomangle*/: H("110,101,101,101,111"),
    /*nomangle*/e/*/nomangle*/: H("111,100,110,100,111"),
    /*nomangle*/f/*/nomangle*/: H("111,100,110,100,100"),
    /*nomangle*/g/*/nomangle*/: H("111,100,100,101,111"),
    /*nomangle*/h/*/nomangle*/: H("101,101,111,101,101"),
    /*nomangle*/i/*/nomangle*/: H("111,010,010,010,111"),
    /*_j: [
        [0,0,1],
        [0,0,1],
        [0,0,1],
        [1,0,1],
        [1,1,1]
    ],*/
    /*nomangle*/k/*/nomangle*/: H("101,101,110,101,101"),
    /*nomangle*/l/*/nomangle*/: H("100,100,100,100,111"),
    /*nomangle*/m/*/nomangle*/: H("101,111,101,101,101"),
    /*nomangle*/n/*/nomangle*/: H("111,101,101,101,101"),
    /*nomangle*/o/*/nomangle*/: H("111,101,101,101,111"),
    /*nomangle*/p/*/nomangle*/: H("111,101,111,100,100"),
    /*nomangle*/q/*/nomangle*/: H("111,101,101,111,001"),
    /*nomangle*/r/*/nomangle*/: H("111,101,110,101,101"),
    /*nomangle*/s/*/nomangle*/: H("111,100,111,001,111"),
    /*nomangle*/t/*/nomangle*/: H("111,010,010,010,010"),
    /*nomangle*/u/*/nomangle*/: H("101,101,101,101,111"),
    /*nomangle*/v/*/nomangle*/: H("101,101,101,101,010"),
    /*nomangle*/w/*/nomangle*/: H("10101,10101,10101,10101,01010"),
    /*nomangle*/x/*/nomangle*/: H("101,101,010,101,101"),
    /*nomangle*/y/*/nomangle*/: H("101,101,111,010,010"),
    /*'\'': H("1"),*/
    '.': H("0,0,0,0,1"),
    ' ': H("00,00,00,00,00"),
    '-': [
        [0,0],
        [0,0],
        [1,1],
        [0,0],
        [0,0]
    ],
    ':': H("0,1,,1,"),
    '?': H("111,111,111,111,111"),
    '!': H("01010,11111,11111,01110,00100"),
    '/': H("001,001,010,100,100"),
    '1': H("110,010,010,010,111"),
    '2': H("111,001,111,100,111"),
    '3': H("111,001,011,001,111"),
    '4': H("100,100,101,111,001"),
    '5': H("111,100,110,001,110"),
    '6': H("111,100,111,101,111"),
    '7': H("111,001,010,010,010"),
    '8': H("111,101,111,101,111"),
    '9': H("111,101,111,001,111"),
    '0': H("111,101,101,101,111"),
    '(': H("01,1,1,1,01"),
    ')': H("10,01,01,01,1")
};

if(true){
    (function(){
        _o = {};
        for(var i in cH){
            _o[i] = 0;
        }

        window.iL = function(){
            var eC = [];
            for(var i in _o){
                if(!_o[i]){
                    eC.push(i);
                }
            }
            return eC.sort();
        };
    })();
}

function X(r, t, x, y, s, c){
    for(var i = 0 ; i < t.length ; i++){
        if(true){
            _o[t.charAt(i)] = 1;
        }

        var eB = gD(t.charAt(i), s, c);

        r.drawImage(eB, x, y);

        x += eB.width + s;
    }
}

var cG = {};
function cF(r, t, x, y, s, c){
    var key = t + s + c;
    if(!cG[key]){
        cG[key] = _d(s * _J(t, s), s * 5, function(r){
            X(r, t, 0, 0, s, c);
        });
    }
    r.drawImage(cG[key], x, y);
}

function _J(t, s){
    var r = 0;
    for(var i = 0 ; i < t.length ; i++){
        r += cH[t.charAt(i)][0].length + 1;
    }
    return r - 1;
}

var cE = {};
function gD(t, s, c){
    var key = t + s + c;
    if(!cE[key]){
        var aT = cH[t];
        cE[key] = _d(aT[0].length * s, aT.length * s, function(r){
            r.fillStyle = c;
            for(var $ = 0 ; $ < aT.length ; $++){
                for(var _ = 0 ; _ < aT[$].length ; _++){
                    if(aT[$][_]){
                        r.fillRect(_ * s, $ * s, s, s);
                    }
                }
            }
        });
    }
    return cE[key];
}

function L(t, w){
    w = w || 440;
    return _d(w, 100, function(r){
        with(r){
            fillStyle = '#444';
            fillRect(0, 90, w, 10);

            fillStyle = '#fff';
            fillRect(0, 0, w, 90);

            X(r, '::' + t + '()', 100, 20, 10, '#000');

            fillStyle = '#000';
            beginPath();
            moveTo(40, 20);
            lineTo(80, 45);
            lineTo(40, 70);
            fill();
        }
    });
}

function gC(){
    this._I = 1;
    this.gB = 400;

    this._g = function(){
        R.globalAlpha = this._I;
        R.fillStyle = '#fff';
        beginPath();
        arc(P.x, P.y, this.gB, 0, PI * 2, 1);
        fill();
        R.globalAlpha = 1;
    };

    var a = this;

    N(this, 'gB', 320, 0, 0.4, 1);
    N(this, '_I', 0, 1, 0.4, 1, 0, function(){
        P.cD = 1;

        for(var i = 0 ; i < 50 ; i++){
            var t = F(0.5, 1.5),
                a = F(-PI, PI),
                l = F(8, 80),
                x = cos(a) * l + P.x,
                y = sin(a) * l + P.y - 40;

            _K(4, '#fff', [
                ['x', x, x, t, 0, eA],
                ['y', y, y + F(80, 240), t, 0],
                ['s', F(8, 16), 0, t]
            ], 1);
        }
    });

    P.cD = P._q = 0;
    P.ez = 1;
    G.aq = 1;

    var ey = 500;
    if(!G._z){
        _r(function(){
            P._f([
                /*nomangle*/'Hello there!'/*/nomangle*/,
                /*nomangle*/'This code is falling apart!'/*/nomangle*/,
                /*nomangle*/'Let\'s find the glitches before it\'s too late!'/*/nomangle*/,
                /*nomangle*/'Use WASD or your Arrow Keys to move!'/*/nomangle*/,
                /*nomangle*/'Pressing W or the Up Arrow lets you jump'/*/nomangle*/,
                /*nomangle*/'Pressing it twice lets you double jump!'/*/nomangle*/
            ]);
        }, 2000);
        ey = 9000;
    }

    _r(function(){
        gR.play();
    }, 500);

    _r(function(){
        P.ez = 0;
        P._q = 1;
        ex();
    }, ey);
}

function ew(f){
    var aS = V.x + J,
        aR = V.y + _c;

    for(var $ = ~~(V.y / 80) ; $ <  ~~(aR / 80) + 1 ; $++){
        for(var _ = ~~(V.x / 80) ; _ <  ~~(aS / 80) + 1 ; _++){
            if(W.U[$] && W.U[$][_]){
                f(W.U[$][_]);
            }
        }
    }
}

function ex(){
    G.aq = 0;

    ew(function(t){
        var r = _H(t._h, P);
        t.bJ = 0.5;
        N(t, 'bJ', 0, 1, r / J, 0, bI);
    });
}

function gA(){
    G.aq = 0;

    ew(function(t){
        var r = _H(t._h, P);
        t.bJ = 0.5;
        N(t, 'bJ', 1, 0, r / J, 0, bI);
    });
}

var ev = eI(400, 400, function(r){
    var eu = cC.toString().split(';').slice(0, 20),
        step = 400 / eu.length,
        y = step / 2;

    with(r){
        fillStyle = '#000';
        fillRect(0, 0, 400, 400);

        fillStyle = '#fff';
        globalAlpha = 0.1;
        font = '14pt Courier New';

        eu.forEach(function(l, i){
            fillText(l, 0, y);

            y += step;
        });
    }
});

var bH = [{
    "_y": H("0000000000,1103113011,1100000011,1100000011,1110000111,0000000000,0030000300,1110110111,1110000111,1110000111"),
    "_G": 15
}, {
    "_y": H("1111111111,1111111111,1111111111,0330000330,0000000000,0000000000,0330000330,1113003111,1110000111,1110000111"),
    "_G": 14
}, {
    "_y": H("1001111001,1000000001,1111001111,1000000001,1000000001,1000000000,1001111000,1001111001,1001111001,1111111111"),
    "_G": 9
}, {
    "_y": H("1111111111,1000000000,1000000000,1000000000,1001100300,1001100110,1001100110,1111111111,1111111111,1111111111"),
    "_G": 8
}, {
    "_y": H("1110000001,1111000011,0011000011,0000000001,0003000001,0011000011,0011000011,1111301111,1000000001,1000000001"),
    "_G": 7
}, {
    "_y": H("0000000000,0030000300,0111331110,0000000000,0000000000,0030000300,0111331110,0000000000,0000000000,0000000000"),
    "_G": 15
}, {
    "_y": H("1100000011,1100000011,0000000000,0000330000,0000110000,0000110000,0011111100,0000330000,0000000000,0000000000"),
    "_G": 15
}, {
    "_y": H("1000000001,1000000001,1000000001,1111001111,0000000000,0000000000,1110110111,1000000001,1000000001,1111111111"),
    "_G": 13
}, {
    "_y": H("0000000000,0000000000,0000000000,0000000000,0000330000,0110110110,0110000110,0110000110,1111111111,1111111111"),
    "_G": 13
}, {
    "_y": H("1300000011,1300000011,1000000011,1000000011,1100000011,1100000030,1100110000,1100110030,1100110011,1111111111"),
    "_G": 9
}, {
    "_y": H("1111111111,1111111111,1111111111,0000110000,0000110000,0000000000,0000000000,1110000111,1110330111,1111111111"),
    "_G": 12
}, {
    "_y": H("1111111111,0000000001,0000000001,0000000011,0000000001,0033000001,1111303111,1111000001,1111000001,1111000001"),
    "_G": 6
}, {
    "_y": H("0000000001,0000311301,0000000001,0000000001,0000000001,1110000301,1110000111,1110000001,1113300001,1111111111"),
    "_G": 5
}, {
    "_y": H("1111111111,0000000000,0000000000,0000110000,0000110000,0001111000,0000000000,0030000300,0110000110,1111111111"),
    "_G": 12
}, {
    "_y": H("1111111111,1110000111,1110000111,0000000000,0000000000,0000110000,0300110030,1100110011,1100110011,1111111111"),
    "_G": 12
}, {
    "_y": H("1111111111,1111111111,0000000000,0000000000,0000110000,0000000000,0110000110,0110000110,1110000111,1111111111"),
    "_G": 12
}, {
    "_y": H("1111111111,0000000000,0000000000,0000000000,0000000110,0000000110,0001100113,0001100111,1001100111,1111111111"),
    "_G": 12
}, {
    "_y": H("1111111111,0000000000,0000000000,1103113011,0000000000,0000000000,1103113011,0000000000,0000000000,1111111111"),
    "_G": 12
}, {
    "_y": H("1000000001,1113111001,1000000001,1000000001,1001111111,1000000000,1000000000,1111311001,1000000001,1000000001"),
    "_G": 11
}, {
    "_y": H("1111111111,1001111111,1000000000,1001000300,1111001110,1000001110,1000001111,1001111111,1001111111,1111111111"),
    "_G": 8
}, {
    "_y": H("1111111111,1000000001,1000000001,1113300111,1000000000,1000000000,1110033111,1000000001,1000000001,1111111111"),
    "_G": 8
}, {
    "_y": H("1110000111,1110000111,1110000111,0000000000,0030000300,0110000110,0110110110,1110000111,1110000111,1111111111"),
    "_G": 13
}, {
    "_y": H("1111111111,0000000001,0000000001,0111111001,0100000001,1100000001,1100113111,1100000001,1100000001,1111111001"),
    "_G": 6
}, {
    "_y": H("1100000011,0000110000,0000110000,0011111100,0011111100,0000110000,3300110033,0000000000,0000000000,1111111111"),
    "_G": 13
}];

var gz = H("11111111111111111111111111111111111111111111111111111111111111111111111111111111,11111111111111111111111111111000000000111111111111111111111111111111111111111111,11111111111111111111111111111000000000111111111111111111111111111111111111111111,10000000000000000000000001100000000000001100000000000000000000000000000000000001,10000000000000000000000001100000111000001100000000000000000000000000000000000001,10000000000000000000000006600000111000006600000000000000000000000000000000000001,10000000000000110000000000000111111111000000000111111100000000100000010000000001,10400000001100110011000000000111111111000000000111111100000000100000010000050001,11111111111177117711111111111111111111111111111111111111111111111111111111111111");

function F(a, b){
    // ~~b -> 0
    return random() * ((a || 1) - ~~b) + ~~b;
}

// jQ distance
function _H(a, b){
    return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
}

onresize = function(){
    var et = innerWidth,
        er = innerHeight,

        gy = et / er, // available ratio
        cB = J / _c, // base ratio
        w,
        h,
        s = D.querySelector('#cc').style;

    if(gy <= cB){
        w = et;
        h = w / cB;
    }else{
        h = er;
        w = h * cB;
    }

    s.width = w + 'px';
    s.height = h + 'px';
};

function Y(bG, bF, gx){
    bG = bG.slice(0);
    bF = bF || 1;

    var aQ = [];

    while(aQ.length < bF){
        aQ = aQ.concat(
            bG.splice(~~(random() * bG.length), 1) // returns B hN of deleted elements
        );
    }

    return bF === 1 && !gx ? aQ[0] : aQ;
}

function cA(a, b, c){
    if(b < a) return a;
    if(b > c ) return c;
    return b;
}

// Remove ie element from ie hN
function _A(l, e){
    var i = l.indexOf(e);
    if(i >= 0) l.splice(i, 1);
}

function gw(t, b, c, d){
    return (t / d) * c + b;
}

function gv(t, b, c, d) {
    s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}

function eA(t, b, c, d) {
    return sin((t / d) * PI * 4) * c + b;
}

function bI(t, b, c, d) {
    if ((t /= d) < (1/2.75)) {
        return c * (7.5625 * t * t) + b;
    }
    if (t < (2/2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    }
    if (t < (2.5/2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    }
    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
}

function N(o, p, a, b, d, l, f, e){
    var i = {
        o: o, // object
        p: p, // property
        a: a, // from
        b: b, // _l
        d: d, // duration
        l: l || 0, // delay
        f: f || gw, // easing function
        e: e, // end callback
        t: 0,
        _a: function(e){
            if(i.l > 0){
                i.l -= e;
                i.o[i.p] = i.a;
            }else{
                i.t = min(i.d, i.t + e);
                i.o[i.p] = i.f(i.t, i.a, i.b - i.a, i.d);
                if(i.t == i.d){
                    if(i.e){
                        i.e();
                    }
                    _A(G.ap, i);
                }
            }
        }
    };
    G.add(i, 2);
}

function gu(n, l){
    n = '' + n;
    while(n.length < l){
        n = '0' + n;
    }
    return n;
}

function eq(t, iK){
    var m = ~~(t / 60),
        s = ~~(t % 60);

    return gu(m, 2) + ':' + gu(s, 2) + (iK ? '.' + gu(~~(t % 1 * 100), 2) : '');
}

function cz(){
    this.ao = [];

    this._I = 1;

    this.L = function(d, x, y, a){
        this.ao.push({
            d: d, // iJ
            x: x,
            y: y,
            a: a, // action
            o: 1 // opacity
        });
    };

    this.click = function(x, y){
        if(this._I == 1){
            this.ao.forEach(function(b){
                if(x > b.x && y > b.y && x < b.x + b.d.width && y < b.y + b.d.height){
                    gP.play();
                    b.a.call(b);
                }
            });
        }
    };

    this._g = function(){
        R.globalAlpha = this._I;

        R.fillStyle = ev;
        fillRect(0, 0, J, _c);

        var a = this._I;
        this.ao.forEach(function(b){
            R.globalAlpha = a * b.o;
            drawImage(b.d, b.x, b.y);
        });

        R.globalAlpha = 1;
    };

    this.cw = function(){
        this.ao.forEach(function(b, i){
            N(b, 'x', -b.d.width, 0, 0.25, i * 0.25 + 0.5);
        });
    };
}

function cv(bE){
    cz.call(this);

    var am = [
        [/*nomangle*/'critical'/*/nomangle*/, /*nomangle*/'mental health'/*/nomangle*/],
        [/*nomangle*/'time'/*/nomangle*/, /*nomangle*/'expired'/*/nomangle*/],
        [/*nomangle*/'code fixed'/*/nomangle*/, '!!!']
    ][bE];

    var t = eq(G.bd);

    if (G.cu < (G._z - 1)){
        G.cu = G._z - 1
    }
    if (bE === 2) {
        window.parent.postMessage({ "gameComplete": 1, "score": G.cu }, "*");
        this.L(L(/*nomangle*/'retry'/*/nomangle*/), 0, 420, G.bD);
        this.L(L(/*nomangle*/'back'/*/nomangle*/), 0, 560, G.aP);
    } else if (bE === 1) {
        window.parent.postMessage({ "gameComplete": 1, "score": G.cu }, "*");
        this.L(L(/*nomangle*/'back'/*/nomangle*/), 0, 560, G.aP);
    } else{
        window.parent.postMessage({ "gameComplete": 1, "score": G.cu }, "*");
        this.L(L(/*nomangle*/'retry'/*/nomangle*/), 0, 420, G.bD);
        this.L(L(/*nomangle*/'back'/*/nomangle*/), 0, 560, G.aP);
    }
    

    /*var b;
    this.L(L(nomangleing('foo')), 0, 700, function(){
        this.d = L((b = !b) ? 'bar' : 'foo');
    });*/

    this.cw();

    am.push(bE == 2 ? /*nomangle*/'time: '/*/nomangle*/ + t : /*nomangle*/'fixed '/*/nomangle*/ + (G._z - 1) + '/13');
    am.push(/*nomangle*/'high score: '/*/nomangle*/ + G.cu);

    var ct = am[0],
        bC = 10,
        ep = _J(ct) * bC,
        cs = am[1],
        bB = 10,
        eo = _J(cs) * bB,
        cr = am[2],
        bA = 5,
        en = _J(cr) * bA;


    var cq = am[3],
        bz = 8, // slightly smaller text if iA want
        em = _J(cq) * bz;

    this.L(_d(em, bz * 5 + 5, function(r){
    X(r, cq, 0, 5, bz, '#444');
    X(r, cq, 0, 0, bz, '#fff');
    }), (J - em) / 2, 340);

    this.L(_d(ep, bC * 5 + 5, function(r){
    	X(r, ct, 0, 5, bC, '#444');
        X(r, ct, 0, 0, bC, '#fff');
    }), (J - ep) / 2, 120);

    this.L(_d(eo, bB * 5 + 5, function(r){
        X(r, cs, 0, 5, bB, '#444');
        X(r, cs, 0, 0, bB, '#fff');
    }), (J - eo) / 2, 200);

    this.L(_d(en, bA * 5 + 5, function(r){
        X(r, cr, 0, 5, bA, '#444');
        X(r, cr, 0, 0, bA, '#fff');
    }), (J - en) / 2, 280);
}

function el(){
    cz.call(this);

    this.L(L(/*nomangle*/'tutorial'/*/nomangle*/), 0, 420, G.cp);
    this.L(L(/*nomangle*/'start'/*/nomangle*/), 0, 560, G.bD);

    this.cw();

    var bx = (J - 460) / 2;
    this.L(_d(460, 230, function(r){
    	X(r, 'glitch', 0, 10, 20, '#444');
    	X(r, 'glitch', 0, 0, 20, '#fff');

    	X(r, 'buster', 0, 130, 20, '#444');
    	X(r, 'buster', 0, 120, 20, '#fff');
    }), bx, 90);

    N(this.ao[this.ao.length - 1], 'o', 0, 1, 0.25, 0.5);
}

function gt(){
    cz.call(this);

    this.L(L(/*nomangle*/'high'/*/nomangle*/, 500), 0, 420, function(){
        _k = 0; // ku _l switch from undefined
        G.aP();
    });
    this.L(L(/*nomangle*/'low'/*/nomangle*/, 500), 0, 560, function(){
        G.gs(0.5);
        _k = 1;
        G.aP();
    });

    this.cw();

    var bx = (J - 270) / 2;
    this.L(_d(270, 55, function(r){
        X(r, /*nomangle*/'quality'/*/nomangle*/, 0, 5, 10, '#444');
        X(r, /*nomangle*/'quality'/*/nomangle*/, 0, 0, 10, '#fff');
    }), bx, bx);
}

function ek(x, y, K){
    this.x = x;
    this.y = y;
    this.K = K;

    this._g = function(){
        if(!V.bK(this.x, this.y, 80)){
            return;
        }

        save();
        translate(x, y);

        if(!_k){
            drawImage(cJ, -80, -80);
        }

        var co = sin(G.t * PI * 2 * 0.5) * 10 + -40;

        // Arrow
        R.fillStyle = '#fff';
        beginPath();
        moveTo(-20 / 2, -20 / 2 + co);
        lineTo(20 / 2, -20 / 2 + co);
        lineTo(0, co);
        fill();

        this.ej(); // defined in subclasses

        restore();
    };

    this._a = function(){
        if(_H(this, P) < 40 && !this.gr){
            G._A(this);

            this.bw();

            this.gr = 1;
            gS.play();

            this.ei(); // defined in subclasses
        }
    };

    this.bw = function(){
        for(var i = 0 ; i < 10 ; i++){
            var x = F(this.x - 80 / 4, this.x + 80 / 4),
                y = F(this.y - 80 / 4, this.y + 80 / 4),
                d = F(0.2, 0.5);
            _K(3, '#fff', [
                ['x', x, x, 0.5],
                ['y', y, y - F(40, 80), 0.5],
                ['s', 12, 0, 0.5]
            ]);
        }
    };
}

function gq(x, y){
    ek.call(this, x, y, 2);

    this.ej = function(){
        R.fillStyle = 'red';
        rotate(PI / 4);
        fillRect(-8, -8, 16, 16);
    };

    this.ei = function(){
        P.al++;

        P._f([Y([
            /*nomangle*/'Here\'s a breakpoint!'/*/nomangle*/,
            /*nomangle*/'You found a breakpoint!'/*/nomangle*/,
            /*nomangle*/'That\'s a breakpoint!'/*/nomangle*/
        ]), G.ak ? /*nomangle*/'Hold the circle button to throw it'/*/nomangle*/ : /*nomangle*/'Press SPACE to throw it'/*/nomangle*/]);
    };
}

function gp(x, y){
    ek.call(this, x, y, 1);

    this.ej = function(){
        var o = -_J('!', 5) * 5 / 2;
        X(R, '!', o, o, 5, '#f00');
    };

    this.ei = function(){
        P._X++;
        P._f(/*nomangle*/'health++'/*/nomangle*/); // TODO more strings
    };
}

function gn(_y){
    var _G = _y._G;
    if(_y._G & 8){
        _G |= 4;
    }else{
        _G ^= 4;
    }
    if(_y._G & 4){
        _G |= 8;
    }else{
        _G ^= 8;
    }

    return {
        '_y': _y._y.map(function(r){
            return r.slice(0).reverse(); // reverse() modifies B hN kx kw ku _l make a ir of it
        }),
        '_G': _G
    };
}

function gm(bH, gl){
    return Y(bH.filter(function(m){
        return m._G == gl;
    }));
}


function gk(id){
    if(!id){
        return eH(gz, 5);
    }

    // Mirror all B bH _l have more possibilities
    var gj = bH.concat(bH.map(gn));

    var bv = id < 0 ? 4 : round((id - 1) * 0.4 + 2),
        bu = id < 0 ? 5 : round((id - 1) * 0.2 + 3),
        _W = [],
        _,
        $,
        cn = [],
        aO = [];

    for(_ = 0 ; _ < bu ; _++){
        aO.push(_);
    }

    for($ = 0 ; $ < bv ; $++){
        _W.push([]);

        for(_ = 0 ; _ < bu ; _++){
            _W[$][_] = 0;

            // hj T above jF going down, ku _l ensure there's a _l this one
            if(cn.indexOf(_) >= 0){
                _W[$][_] |= 1;
            }

            // Need _l connect left if kw're fq dj B far left
            if(_ > 0){
                _W[$][_] |= 4;
            }

            // Need _l connect right if kw're fq dj B far right
            if(_ < bu - 1){
                _W[$][_] |= 8;
            }
        }

        // Generate B link _l B lower $
        if($ < bv - 1){
            cn = Y(aO, Y([1, 2, 3]), 1);
            cn.forEach(function(_){
                _W[$][_] |= 2;
            });
        }
    }

    var M = [];
    for($ = 0 ; $ < bv * 10 ; $++){
        M[$] = [];
    }

    function gi(M, _y, gh, gg){
        for(var $ = 0 ; $ < 10 ; $++){
            for(var _ = 0 ; _ < 10 ; _++){
                M[$ + gh][_ + gg] = _y[$][_];
            }
        }
    }

    for($ = 0 ; $ < bv ; $++){
        for(_ = 0 ; _ < bu ; _++){

            var _y = gm(gj, _W[$][_])._y;

            // Apply _y
            gi(M, _y, $ * 10, _ * 10);
        }
    }

    var _i = [],
        eh = [],
        eg = [],
        bs = [];

    for($ = 0 ; $ < M.length ; $++){
        _i.push([]);
        bs.push([]);

        M[$][_] = parseInt(M[$][_]);

        for(_ = 0 ; _ < M[$].length ; _++){
            _i[$].push(M[$][_]);

            // Probabilistic wall, let's decide now
            if(M[$][_] == 3){
                _i[$][_] = F() < 0.5 ? 1 : 0;
            }

            // Detect eh _N eg _l add spikes, _V _N _x
            if($ > 0){
                if(_i[$][_] == 1 && _i[$ - 1][_] == 0){
                    var f = [$, _];
                    eh.push(f);
                    bs[$].push(f);
                }

                if(_i[$][_] == 0 && _i[$ - 1][_] == 1){
                    eg.push([$ - 1, _]);
                }
            }
        }
    }

    // Add a random _V _N a random _x
    var _V = Y(eG(bs.slice(0, 10))),
        _x = Y(eG(bs.slice(_i.length - 10 * 0.6)));

    _i[_V[0] - 1][_V[1]] = 4;
    _i[_x[0] - 1][_x[1]] = 5;
    _i[_x[0]][_x[1]] = 2;

    // Add random spikes
    eh.forEach(function(f){
        if(f != _x && f != _V && F() < 0.05){
            _i[f[0]][f[1]] = 7;
        }
    });

    eg.forEach(function(c){
        if(c != _x && c != _V && F() < 0.05){
            _i[c[0]][c[1]] = 6;
        }
    });

    return eH(_i, 5);
}

function ef(x, y, angle, aN, bq){
    this.x = x;
    this.y = y;
    this.ee = 2;
    this.ec = 0;

    this.__ = cos(angle) * aN;
    this._$ = sin(angle) * aN;

    this._a = function(e){
        var aa = {
            x: this.x,
            y: this.y
        };

        if(!this.aj || this.aj.gf){
            this.aj = 0;

            this._$ += e * 7500 * 0.5;

            this.x += this.__ * e;
            this.y += this._$ * e;

            this.ec += PI * 4 * e;

            var ba = {
                x: this.x,
                y: this.y
            };

            // Trail
            if(!_k && !bq){
                var t = {
                    _I: 1,
                    _g: function(){
                        R.strokeStyle = 'rgba(255, 0, 0, ' + this._I + ')';
                        R.lineWidth = 8;
                        beginPath();
                        moveTo(aa.x, aa.y);
                        lineTo(ba.x, ba.y);
                        stroke();
                    }
                };
                G.add(t, 1);

                N(t, '_I', 1, 0, 0.3, 0, 0, function(){
                    G._A(t);
                });
            }
        }

        // Explosion
        if(!bq){
            this.ee -= e;
            if(this.ee <= 0){
                this.eb();
            }else{
                for(var i in G._F){
                    if(G._F[i] != P && _H(G._F[i], this) < 40 / 2){
                        return this.eb(); // no ku _l do B rest
                    }
                }
            }
        }

        var T = W._E(this.x, this.y);
        if(T && !this.aj){
            this.__ *= 0.5;
            this._$ *= 0.5;

            var ge = 0,
                _w;
            do{
                _w = T._D(this, 16, 16);

                if(bq){
                    this.aj |= _w;
                }

                if(_w & 1){
                    this._$ = -abs(this._$);
                }
                if(_w & 2){
                    this._$ = abs(this._$);
                }
                if(_w & 4){
                    this.__ = -abs(this.__);
                }
                if(_w & 8){
                    this.__ = abs(this.__);
                }

                if(max(abs(this.__), abs(this._$)) < 150){
                    this.aj = T;
                    this.__ = this._$ = 0;
                }else{
                    // Particle when bouncing
                    if(_w && !_k && !bq){
                        for(var i = 0 ; i < 2 ; i++){
                            var x = this.x + F(-8, 8),
                                y = this.y + F(-8, 8),
                                d = F(0.2, 0.5);
                            _K(3, '#fff', [
                                ['x', x, x, d],
                                ['y', y, y - F(40, 80), d],
                                ['s', 12, 0, d]
                            ]);
                        }
                    }
                }
            }while(_w && ge++ < 5);
        }
    };

    this.eb = function(){
        if(this.gd){
            return;
        }

        this.gd = 1;

        [
            [this.x - 80, this.y + 80],
            [this.x, this.y + 80],
            [this.x + 80, this.y + 80],
            [this.x - 80, this.y],
            [this.x, this.y],
            [this.x + 80, this.y],
            [this.x - 80, this.y - 80],
            [this.x, this.y - 80],
            [this.x + 80, this.y - 80]
        ].forEach(function(p){
            W.gc(p[0], p[1]);
        });

        for(var i = 0 ; i < 40 ; i++){
            var d = F(0.5, 1.5),
                x = F(-80, 80) + this.x,
                y = F(-80, 80) + this.y;

            _K(3, Y([
                '#f00',
                '#f80',
                '#ff0'
            ]), [
                ['x', x, x + 8, d, 0, eA],
                ['y', y, y - F(80, 240), d, 0],
                ['s', F(24, 40), 0, d]
            ]);
        }

        for(i = G._F.length ; --i >= 0 ;){
            if(_H(this, G._F[i]) < 80 * 2){
                G._F[i].aM(this, 3);
            }
        }

        G._A(this);

        var m = this;
        _r(function(){
            if(V.ai == m){
                V.ai = 0;
            }
        }, 1000);

        gQ.play();
    };

    this._g = function(){
        save();
        translate(this.x, this.y);
        rotate(this.ec);
        R.fillStyle = 'red';
        fillRect(-8, -8, 16, 16);
        restore();
    };
}

function gb(M){
    this.U = [];
    this.M = M;

    this.cm = M.length;
    this.aO = M[0].length;

    for(var $ = 0 ; $ < M.length ; $++){
        this.U.push([]);
        for(var _ = 0 ; _ < M[$].length ; _++){
            this.U[$][_] = 0;
            if(M[$][_] > 0){
                this.U[$][_] = new ga($, _, M[$][_]);

                if(M[$][_] == 4){
                    this._V = this.U[$][_];
                }else if(M[$][_] == 5){
                    this._x = this.U[$][_];
                }
            }
        }
    }

    this._E = function(x, y){
        var $ = ~~(y / 80);
        var t = this.U[$] && this.U[$][~~(x / 80)];
        return t && t.g_ && t;
    };

    this.g$ = function(T){
        if(T && T.K != 2){
            for(var i = 0 ; i < 50 ; i++){
                var d = F(0.5, 2),
                    x = T.x + F(80);

                _K(4, '#fff', [
                    ['x', x, x, d],
                    ['y', T.y + F(80), this.ea(x, T._h.y), d, 0, bI],
                    ['s', 12, 0, d]
                ]);
            }

            T.gf = 1;
            this.U[T.$][T._] = 0;
        }
    };

    this.gc = function(x, y){
        this.g$(this._E(x, y));
    };

    this.e_ = function(l){
        var aL = 0,
            e$ = [];
        for(var $ = 0 ; $ < this.cm - 1 ; $++){ // skip B last $
            aL = 0;
            for(var _ = 0 ; _ < this.aO ; _++){
                var cR = this.M[$][_] != 0;
                var fZ = this.M[$ + 1][_] == 1 || this.M[$ + 1][_] == 2;

                if(!fZ || cR){
                    if(aL >= l){
                        e$.push({
                            $: $,
                            dZ: _ - aL,
                            dW: _ - 1
                        });
                    }
                    aL = 0;
                }else{
                    aL++;
                }
            }
        }
        return e$;
    };

    this.ea = function(x, y){
        do{
            y += 80;
        }while(y < this.cm * 80 && !this._E(x, y));

        return ~~(y / 80) * 80;
    };

    this._g = function(){
        R.fillStyle = G.aq || _k ? '#000' : '#fff';
        fillRect(0, 0, J, _c);

        save();

        /*if(G.invert){
            translate(0, _c);
            scale(1, -1);
        }*/

        translate(-V.x, -V.y);

        R.fillStyle = _k ? '#000' : ev;
        fillRect(0, 0, this.aO * 80, this.cm * 80);

        var aS = V.x + J,
            aR = V.y + _c;

        for(var $ = ~~(V.y / 80) ; $ <  ~~(aR / 80) + 1 ; $++){
            for(var _ = ~~(V.x / 80) ; _ <  ~~(aS / 80) + 1 ; _++){
                if(this.U[$] && this.U[$][_]){
                    this.U[$][_]._g();
                }
            }
        }

        P._g();

        for(var i in G.aK){
            G.aK[i]._g();
        }

        if(!_k){
            var px = P.x,
                dV = P.y + (P.cl ? 200 : 0);

            px = V.x + J / 2;
            dV = V.y + _c / 2;
            var bp = ~~px - 500,
                ah = ~~dV - 500,
                ck = bp + 1000,
                cj = ah + 1000;

            R.fillStyle = '#000';
            if(bp > V.x){
                fillRect(V.x, ah, bp - V.x, 1000);
            }
            if(ck < aS){
                fillRect(ck, ah, aS - ck, 1000);
            }
            if(ah > V.y){
                fillRect(V.x, V.y, J, ah - V.y);
            }
            if(cj < aR){
                fillRect(V.x, cj, J, aR - cj);
            }

            drawImage(gH, bp, ah);
        }

        restore();
    };
}

function fY(){
    // Lazy init
    this.bo = this.bn = this.x = this.y = 0;

    // jX bf which B camera would ideally kz
    this.target = function(_b){
        var x, y;
        if(!this.ai){
            x = P.x + (P._q && _b ? P._b * 50 : 0);
            y = P.y + (P._q && P.cl && _b ? 400 : 0);
        }else{
            x = this.ai.x;
            y = this.ai.y;
        }
        return {
            x: ~~(x - (J / 2)),
            y: ~~(y - (_c / 2))
        };
    };

    // Instantly ki B camera _l B position lD it's supposed _l kz
    this.fX = function(e){
        var t = this.target();
        this.bo = this.x = t.x;
        this.bn = this.y = t.y;
    };

    this.bK = function(x, y, d){
        return x + d > this.x &&
            y + d > this.y &&
            x - d < this.x + J &&
            y - d < this.y + _c;
    };

    this._a = function(e){
        var target = this.target(1),
            d = _H(target, this),
            _v = max(1, d / 0.2),
            angle = atan2(target.y - this.bn, target.x - this.bo),
            dU = min(_v * e, d);

        var px = 1 / G.aJ;

        if(d > px){
            this.bo += cos(angle) * dU;
            this.bn += sin(angle) * dU;
        }

        this.x = ~~(this.bo / px) * px;
        this.y = ~~(this.bn / px) * px;
    };
}

function ga($, _, K){
    this.x = (this._ = _) * 80;
    this.y = (this.$ = $) * 80;
    this.g_ = [4, 5].indexOf(K) < 0;
    this.K = K;

    this._I = 1;
    this.bJ = 1;

    this._h = {
        x: this.x + 80 / 2,
        y: this.y + 80 / 2
    };

    this._D = function(_O, w, h){
        var _w = [{
            x: this.x - (w || 40) / 2,
            y: _O.y,
            K: 4
        }, {
            x: this.x + 80 + (w || 40) / 2,
            y: _O.y,
            K: 8
        }, {
            x: _O.x,
            y: this.y - (h || 52) / 2,
            K: 1
        }, {
            x: _O.x,
            y: this.y + 80 + (h || 52) / 2,
            K: 2
        }];

        var closest,
            dT;

        _w.forEach(function(ci){
            var d = sqrt(
                pow(ci.x - _O.x, 2) +
                pow(ci.y - _O.y, 2)
            );
            if(!closest || d < dT){
                closest = ci;
                dT = d;
            }
        });

        _O.x = closest.x;
        _O.y = closest.y;

        return closest.K;
    };

    this._g = function(){
        if(!G.aq && !this.hidden){
            R.fillStyle = '#fff';

            if(_k){
                var cg = ~~(cA(0, 1 - _H(this._h, P) / 800, 1) * 0xf);
                R.fillStyle = '#' + cg.toString(16) + cg.toString(16) + cg.toString(16);
            }

            save();
            translate(this._h.x, this._h.y);
            scale(this.bJ, this.bJ);
            translate(-40, -40);

            if(K == 1 || K == 2){
                fillRect(0, 0, 80, 80);
            }

            if(K == 7 || K == 6){
                if(K == 6){
                    translate(0, 80);
                    scale(1, -1);
                }

                fillRect(0, 24, 80, 56);

                beginPath();
                moveTo(0, 24);

                var step = 20;
                for(var x = step / 2 ; x < 80 ; x += step){
                    lineTo(x, 0);
                    lineTo(x + step / 2, 24);
                }
                lineTo(80, 24);
                fill();
            }

            if(K == 5){
                // Halo
                if(!_k){
                    drawImage(cJ, -40, -40);
                }

                if(this._I == 1){
                    // Bug ID
                    R.font = '14pt Courier New';

                    fillText(
                        'Bug #' + G._z,
                        40,
                        -40
                    );

                    // Arrow
                    beginPath();
                    moveTo(30, -20);
                    lineTo(50, -20);
                    lineTo(40, -10);
                    fill();
                }

                R.globalAlpha = this._I;

                R.fillStyle = eD;

                var x = F(400),
                    y = F(400);

                translate(x, y);
                fillRect(-x, -y, 80, 80);
            }

            restore();
        }
    };

    this.fW = function(c){
        if(K === 7){
            c.aM(this._h);
        }
    };

    this.fV = function(c){
        if(K == 6){
            c.aM(this._h);
        }
    };
}

function cC(){
    this.x = this.y = 0;
    this.S = 0;
    this._b = 1;

    this.cD = 1;

    this.offsetY = 0;
    this.dS = 0;
    this.cf = 0;
    this.ag = [];
    this.bm = 0;

    this.fU = 1;
    this.fT = 1;
    this.af = 0;
    this.aI = 4;

    this.__ = 0;
    this._$ = 0;

    this.aH = 0;

    var _U = 0,
        ce;

    this._g = function(){
        if(this.af > 0 && ~~((this.af * 2 * 4) % 2) && !this._j ||
            !this.cD ||
            !V.bK(this.x, this.y, 40 / 2)){
            return;
        }

        save();
        translate(~~this.x, ~~this.y + this.offsetY);

        // Halo
        if(!_k && !this._j){
            drawImage(this.au, -80, -80);
        }

        // Dialog
        if(this.bm > 0 && this.ag.length){
            R.font = '16pt Arial';

            var t = this.ag[0],
                w = measureText(t).width + 8;
            R.fillStyle = '#000';
            R.globalAlpha = 0.5;
            fillRect(-w / 2, -68 - this.cf, w, 24);
            R.globalAlpha = 1;

            R.fillStyle = this.cb;
            fillRect(-2, -40, 4, -this.cf);

            fillText(t, 0, -56 - this.cf);
        }

        // Facing left dl right
        scale(this._b * this.fU, this.fT);

        // Legs
        if(!this._j){
            save();
            translate(-18, -26);

            var aG = 7,
                fS = 0.3,
                dR = (sin((G.t * PI * 2) / fS) / 2) * aG + aG / 2;

            var fR = this.S || _U > 0 ? dR : aG;
            var fQ = this.S || _U > 0 ? aG - dR : aG;

            R.fillStyle = this.dQ;
            fillRect(0, 45, 6, fR);
            fillRect(30, 45, 6, fQ);
            restore();
        }

        // Let's bob a little
        var fP = PI / 16,
            fO = 0.5,
            aF = (sin((G.t * PI * 2) / fO) / 2) * fP;

        if(this.aF){
            aF = this.aF;
        }else if(!this.S && !this.aE){
            aF = 0;
        }

        translate(0, this.dS);
        rotate(aF);

        save();
        translate(-23, -26);

        // Body
        R.fillStyle = this.cb;
        fillRect(0, 0, 46, 45);

        // Eyes
        var p = 4, // blink interval
            dP = 0.3, // blink time
            mt = G.t % p, // modulo-ed time
            dO = p - dP / 2, // middle of B blink
            s = min(1, max(-mt + dO, mt - dO) / (dP / 2)), // scale of B eyes
            h = s * 4;

        if(this._j){
            h = 1;
        }

        var dN = this.cl ? 24 : 10;

        if(!this.aE){
            R.fillStyle = '#000';
            var offset = this.ez ? -10 : 0;
            fillRect(27 + offset, dN, 4, h);
            fillRect(37 + offset, dN, 4, h);
        }
        restore();

        restore();
    };

    this._a = function(e){
        var aa = {
            x: this.x,
            y: this.y
        };

        this.af -= e;

        if((this.bm -= e) <= 0){
            this._f(this.ag.slice(1));
        }

        if(this._j){
            this.S = 0;
        }

        // Movement

        // Friction
        var aI = this.aI * this._v,
            fN = this.S * this._v,
            fM = fN - this.__,
            fL = cA(-aI * e, fM, aI * e);

        this.__ = cA(-this._v, this.__ + fL, this._v);

        this.x += this.__ * e;

        if(this.S == -this._b){
            N(this, 'fU', -1, 1, 0.1);
        }

        this._b = this.S || this._b;

        // Vertical movement
        this._$ += e * 7500;
        this.y += this._$ * e;

        // Collisions
        this.aH = this.fK(aa);

        // aA there has been no adjustment for up dl down, it means kw're in B air
        if(!(this.aH & 2) && !(this.aH & 1)){
            _U = max(1, _U);
        }
    };

    this.ae = function(p, f){
        if(f){
            _U = 0;
        }

        if(_U++ <= 1){
            this._$ = p * -1700;
            ce = -1;

            var y = this.y + 26;
            for(var i = 0 ; i < 5 ; i++){
                var x = F(this.x - 20, this.x + 20);
                _K(3, '#888', [
                    ['x', x, x, 0.3],
                    ['y', y, y - F(40, 80), 0.3],
                    ['s', 12, 0, 0.3]
                ]);
            }

            return 1;
        }
    };

    this.fJ = function(angle, aN){
        this.__ = cos(angle) * aN;
        this._$ = sin(angle) * aN;
        this._b = this.__ < 0 ? -1 : 1;
    };

    this.aM = function(source, fI){
        var _b = this._b;
        if(this.af <= 0 && !this._j && !this.aE){
            gT.play();

            this.fJ(atan2(
                this.y - source.y,
                this.x - source.x
            ), 1500);

            this.af = 2;

            if((this._X -= fI || 1) <= 0){
                this.ad();
                this._b = _b;
            }else{
                this._f(Y([
                    /*nomangle*/'Ouch!'/*/nomangle*/,
                    /*nomangle*/'health--'/*/nomangle*/
                ]));
            }
        }
    };

    this.aD = function(U){
        this._$ = 0;
        _U = 0;

        // Find B T kI is B closest
        var T = U.sort(function(a, b){
            return abs(a._h.x - P.x) - abs(b._h.x - P.x);
        })[0];

        T.fW(this);

        if(T.y === ce){
            return;
        }

        if(!this._j){
            N(this, 'dS', 0, 8, 0.1);
            N(this, 'dS', 8, 0, 0.1, 0.1);

            for(var i = 0 ; i < 5 ; i++){
                var x = F(this.x - 20, this.x + 20);
                _K(3, '#888', [
                    ['x', x, x, 0.3],
                    ['y', T.y, T.y - F(40, 80), 0.3],
                    ['s', 12, 0, 0.3]
                ]);
            }
        }

        ce = T.y;

        return 1;
    };

    this.fH = function(U){
        this._$ = 0; // prevent from pushing kI T

        // Find B T kI jF B least dangerous
        // We assume types dh sorted from non lethal _l most lethal
        var T = U.sort(function(a, b){
            return abs(a._h.x - P.x) - abs(b._h.x - P.x);
        })[0];

        T.fV(this);
    };

    this.fK = function(aa){
        var _T = this.x - 20,
            _S = this.x + 20,
            ca = this.y - 26,
            ac = this.y + 26;

        var _C = W._E(_T, ca),
            _B = W._E(_S, ca),
            _n = W._E(_T, ac),
            _m = W._E(_S, ac);

        var t = 0;

        if(_B && _n && !_m && !_C){
            t |= _B._D(this);
            t |= _n._D(this);
        }

        else if(_C && _m && !_B && !_n){
            t |= _C._D(this);
            t |= _m._D(this);
        }

        else if(_C && _B){
            this.y = ceil(ca / 80) * 80 + 26;
            t |= 2;

            if(_n){
                this.x = ceil(_T / 80) * 80 + 20;
                t |= 8;
            }else if(_m){
                this.x = floor(_S / 80) * 80 - 20;
                t |= 4;
            }

            //this.fH([_C, _B]);
        }

        else if(_n && _m){
            this.y = floor(ac / 80) * 80 - 26;
            t |= 1;

            if(_C){
                this.x = ceil(_T / 80) * 80 + 20;
                t |= 8;
            }else if(_B){
                this.x = floor(_S / 80) * 80 - 20;
                t |= 4;
            }

            //this.aD([_n, _m]);
        }

        // Collision against a wall
        else if(_C && _n){
            this.x = ceil(_T / 80) * 80 + 20;
            t |= 8;
        }

        else if(_B && _m){
            this.x = floor(_S / 80) * 80 - 20;
            t |= 4;
        }

        // 1 intersection
        else if(_n){
            t |= _n._D(this);
        }

        else if(_m){
            t |= _m._D(this);
        }

        else if(_C){
            t |= _C._D(this);
        }

        else if(_B){
            t |= _B._D(this);
        }

        // Based dj B adjustment, fire some T events
        if(t & 1){
            this.aD([_n, _m].filter(Boolean));
        }else if(t & 2){
            this.fH([_C, _B].filter(Boolean));
        }

        return t;
    };

    this.ad = function(){
        // Can't ad twice, avoid deaths while aE bugs
        if(this._j || this.aE){
            return;
        }

        this._q = 0;
        this._j = 1;
        this._X = 0;

        for(var i = 0 ; i < 40 ; i++){
            var x = F(this.x - 20, this.x + 20),
                y = F(this.y - 26, this.y + 26),
                fG = W.ea(x, this.y),
                d = F(0.5, 1);
            _K(3, '#900', [
                ['x', x, x, 0.5],
                ['y', y, y - F(40, 80), 0.5],
                ['s', 12, 0, 0.5]
            ]);
            _K(3, '#900', [
                ['x', x, x, d],
                ['y', y, fG, d, 0, bI],
                ['s', 12, 0, d]
            ]);
        }

        this.dS = 8;

        N(this, 'aF', 0, -PI / 2, 0.3);

        this._f(Y([
            /*nomangle*/'...'/*/nomangle*/,
            /*nomangle*/'exit(1)'/*/nomangle*/,
            /*nomangle*/'NULL'/*/nomangle*/,
            /*nomangle*/'Fatal error'/*/nomangle*/
        ]));
    };

    this._f = function(s){
        this.ag = s.push ? s : [s];
        this.bm = this.ag.length ? 3 : 0;
        if(this.ag.length){
            N(this, 'cf', 0, 56, 0.3, 0, gv);
        }
    };

    return eF(this);
}

function dM(x, y){
    var sup = cC.call(this);

    this.x = x;
    this.y = y;

    this.cb = '#f00';
    this.dQ = '#b22';
    this.au = gI;
    this._X = 1;
    this._v = 0;

    this._a = function(e){
        // Skipping cycles for far enemies
        if(V.bK(this.x, this.y, 20)){
            sup._a(e);

            if(!this._j){
                var dL = abs(P.x - this.x),
                    dK = abs(P.y - this.y);
                if(dL < 40 && dK < 52){
                    // Okay there's a collision, but is he landing dj iV dl is he colliding with iV?
                    if(dL < dK && P.y < this.y && P._$ > 0){
                        P.ae(0.8, 1);
                        this.aM(P);
                    }else{
                        P.aM(this);
                        this.S = this.x > P.x ? 1 : -1;
                    }
                }

                // Say random shit
                if(this.bm <= 0){
                    this._f('0x' + (~~F(0x100000, 0xffffff)).toString(16));
                }
            }
        }
    };

    this.ad = function(){
        if(!this._j){
            sup.ad();

            var s = this;

            _r(function(){
                s._f([]);

                // Fly away animation
                N(s, 'fU', 1, 0, 0.4);
                N(s, 'fT', 1, 5, 0.3, 0.1);
                N(s, 'offsetY', 0, -400, 0.3, 0.1, 0, function(){
                    _r(function(){
                        G._A(s);
                    }, 0);
                });

                // ek drop
                G.dJ(s.x, s.y, 0.5, 1);
            }, 500);
        }
    };

    return eF(this);
}

function dI(x, y){
    var sup = dM.call(this, x, y);

    this._v = 120;

    this.S = Y([-1, 1]);

    this._a = function(e){
        sup._a(e);

        if(!this._j){
            var _T = this.x - 40,
                _S = this.x + 40,
                ac = this.y + 52 / 2,

                _n = W._E(_T, ac),
                _m = W._E(_S, ac);

            if(this.aH & 4 || !_m || _m.K > 6){
                this.S = -1;
            }
            if(this.aH & 8 || !_n || _n.K > 6){
                this.S = 1;
            }
        }
    };
}

function dH(x, y){
    var sup = dM.call(this, x, y);

    this.dG = 4;
    this.aI = 0;

    this._v = 480;

    this._a = function(e){
        sup._a(e);

        if((this.dG -= e) <= 0 && !this._j){
            this.__ = (this.S = this._b = Y([-1, 1])) * this._v;

            this.ae(0.8);
            this.dG = F(1.5, 2.5);
        }
    };

    this.aD = function(t){
        sup.aD(t);
        this.__ = 0;
        this.S = 0;
    };
}

function dF(){
    var sup = cC.call(this);

    this._q = 1;

    this.al = 0;
    this._X = 5;

    this.cb = '#fff';
    this.dQ = '#aaa';
    this.au = cJ;

    this._v = 560;

    this.aC = 0;
    this.bl = 0;

    this._a = function(e){
        if(!this._q){
            this.S = 0;
        }else{
            if(this.S){
                V.ai = 0;
            }

            var d = _H(this, W._x._h);
            if(d < 40){
                this._q = 0;
                this.aE = 1;

                this._f([
                    /*nomangle*/'Let\'s fix this...'/*/nomangle*/,
                    /*nomangle*/'Done!'/*/nomangle*/
                ]);

                N(this, 'x', this.x, W._x._h.x, 1);
                N(W._x, '_I', 1, 0, 3);

                _r(function(){
                    gM.play();
                    G.fF();
                }, 3500);
            }else if(d < (J / 2) && !this.fE){
                this.fE = 1;
                this._f(/*nomangle*/'You found the bug!'/*/nomangle*/); // TODO more strings
            }
        }

        this.bl = (this.bl + e / 4) % 1;

        sup._a(e);
    };

    this.ad = function(){
        sup.ad();
        G.fD();
    };

    this.ae = function(p, f){
        if(this._q && sup.ae(p, f)){
            gU.play();
        }
    };

    this.dE = function(){
        if(this.al){
            this.aC = 1;
            this.bl = 0;
        }else{
            P._f(Y([
                /*nomangle*/'You don\'t have any breakpoints'/*/nomangle*/,
                /*nomangle*/'breakpoints.count == 0'/*/nomangle*/,
                /*nomangle*/'NoBreakpointException'/*/nomangle*/
            ]));
        }
    };

    this.dD = function(){
        return 500 + (1 - abs((this.bl - 0.5) * 2)) * 1500;
    };

    this.dC = function(){
        if(this.aC && !this._j){
            var g = new ef(
                this.x,
                this.y,
                -PI / 2 + this._b * PI / 4,
                this.dD()
            );
            G.add(g, 3);

            V.ai = g; // make B camera target B grenade

            this.aC = 0;
            this.al = max(0, this.al - 1);
        }
    };

    this._f = function(a){
        sup._f(a);
        if(a && a.length){
            gO.play();
        }
    };

    this.aD = function(t){
        if(sup.aD(t)){
            gN.play();
        }
    };

    this._g = function(e){
        sup._g(e);

        if(this.aC){
            var g = new ef(
                this.x,
                this.y,
                -PI / 2 + this._b * PI / 4,
                this.dD(),
                1
            );

            R.fillStyle = '#fff';
            for(var i = 0 ; i < 40 && !g.aj ; i++){
                g._a(1 / 60);

                if(!(i % 2)){
                    fillRect(~~g.x - 2, ~~g.y - 2, 4, 4);
                }
            }
        }
    };
}

function fC(){
    var c_ = _c / 10;

    drawImage(_d(J, _c, function(r){
        for(var y = 0 ; y < _c ; y += c_){
            r.drawImage(
                C,
                0, y, J, c_,
                F(-100, 100), y, J, c_
            );
        }
    }), 0, 0);
}

function fB(){
    R.fillStyle = eD;

    var x = ~~F(-400, 400),
        y = ~~F(-400, 400);

    save();
    translate(x, y);
    R.globalAlpha = F(0.5);
    fillRect(-x, -y, J, _c);
    restore();
}

function fA(){
    G = this;

    var aB,
        bk = 0,
        bj = 0;

    G._z = 0;
    G.aJ = 1;
    
    G.bi = 300;

    G.t = 0;
    //G.frameCount = 0;
    //G.frameCountStart = Date.now();
    G.cu = 0; // "Highscore: ", G.cu

    V = new fY();
    P = new dF();
    P._q = 0;

    G.cp = function(){
        G.bD(1);
    };

    G.bD = function(cp){
        P = new dF();

        G._z = cp ? -1 : 0;
        G.bd = 0;
        G.c$();
        N(G.Z, '_I', 1, 0, 0.5, 0, 0, function(){
            G.Z = 0;
        });

        G.add(new gC(P.x, P.y), 1);
    };

    G.c$ = function(fz){
        G.ap = [];
        G._F = [];
        G.aK = [];

        G.bZ(0, 0.5);

        if(fz){
            return;
        }

        // gb
        W = new gb(gk(++G._z));

        // Keeping track of B items kw cZ _V
        W.fw = {
            1: 8 - P._X, // max 6 _X
            2: 10 - P.al // max 5 nades
        };

        G.aq = 0;

        // dF
        P.x = W._V.x + 80 / 2;
        P.y = W._V.y + 80 - 40 / 2;
        P._q = 1;
        P.aE = 0;

        G.add(V, 2);
        G.add(P, 7);

        // Prevent camera from lagging behind
        V.fX();

        // Enemies
        if(!G._z){
            // Put B enemies bf B right spots
            var dB;

            G.add(dB = new dI(4500, 800), 7);
            G.add(new dH(5700, 800), 7);

            var dA;
            G.add({
                _a: function(){
                    if(!dA && abs(P.x - dB.x) < J){
                        dA = 1;

                        P._f([
                            /*nomangle*/'Watch out for those red guys!'/*/nomangle*/,
                            /*nomangle*/'They\'re super dangerous!'/*/nomangle*/,
                            /*nomangle*/'Either avoid them or kill them'/*/nomangle*/,
                            /*nomangle*/'To kill them, jump on their heads!'/*/nomangle*/,
                            /*nomangle*/'You might get a breakpoint or an extra life!'/*/nomangle*/
                        ]);
                    }
                }
            }, 2);
        }else{
            _r(function(){
                P._f(Y([
                    /*nomangle*/'Let\'s find those bugs!'/*/nomangle*/,
                    /*nomangle*/'Yay more bugs'/*/nomangle*/,
                    /*nomangle*/'Where are those bugs?'/*/nomangle*/
                ]));
            }, 500);

            // Add enemies
            W.e_(2).forEach(function(path){
                var dz = new (Y([dI, dH]))(
                    80 * F(path.dZ, path.dW),
                    80 * (path.$ + 1) - 52 / 2
                );
                if(F() < 0.2 && _H(dz, P) > J / 2){
                    G.add(dz, 7);
                }
            });

            // Add items for ei
            var dw = W.e_(1);
            Y(dw, dw.length).forEach(function(path){
                // Create B bW _N place it dj B path
                G.dJ(
                    (~~F(path.dZ, path.dW) + 0.5) * 80,
                    (path.$ + 0.5) * 80,
                    0.05
                );
            });
        }
    };

    // fA loop
    G._a = function(e){
        G.t += e;

        /*// 100th frame, checking if kw dh in a bad situation, _N if yes, enable shitty mode
        if(++G.frameCount == 100 && (G.frameCount / ((Date.now() - G.frameCountStart) / 1000) < 30)){
            G.gs(G.aJ * 0.5);
            _k = 1;
        }*/

        bj -= e;
        if(bj <= 0){
            aB = 0;

            bk -= e;
            if(bk <= 0){
                G.bZ();
            }
        }

        var bY = 1 / 120, // TODO adjust
            iI = ~~(e / bY);
        while(e > 0){
            G.fv(min(e, bY));
            e -= bY;
        }

        // Rendering
        save();
        scale(G.aJ, G.aJ);

        // Font di dh common across B game
        R.textAlign = /*nomangle*/'center'/*/nomangle*/;
        R.textBaseline = /*nomangle*/'middle'/*/nomangle*/;

        if(W){
            W._g();
        }

        if(G.Z){
            G.Z._g();
        }else{
            // HUD

            // Health hJ
            var bX = '';
            for(i = 0 ; i < P._X ; i++){
                bX += '!';
            }

            // iH hJ
            var du = eq(G.bi, 1),
                dt = /*nomangle*/'progress: '/*/nomangle*/ + G._z + '/13',
                fu = /*nomangle*/'breakpoints: '/*/nomangle*/ + P.al;

            X(R, du, (J - _J(du) * 10) / 2, aU ? 50 : 10, 10, G.bi > 30 ? '#fff' : '#f00');
            cF(R, bX, (J - _J(bX) * 5) / 2, aU ? 120 : 80, 5, P._X < 3 || P.af > 1.8 ? '#f00' : '#fff');

            cF(R, dt, (J - _J(dt) * 4) - 10, 10, 4, '#fff');
            cF(R, fu, 10, 10, 4, '#fff');

            if(G.ak){
                // Mobile controls
                [gG, cI, gE, gF].forEach(function(b, i){
                    R.globalAlpha = bh[i] ? 1 : 0.5;
                    drawImage(b, (i + 0.5) * J / 4 - 80 / 2, _c - 100);
                });

                R.globalAlpha = 1;
            }
        }

        if(true){
            save();

            R.fillStyle = '#000';
            fillRect(J * 0.6, 0, J * 0.4, 120);

            R.fillStyle = 'white';
            R.textAlign = 'left';
            R.font = '18pt Courier New';
            fillText('FPS: ' + G.ft, J * 0.6, 20);
            fillText('Cyclables: ' + G.ap.length, J * 0.6, 40);
            fillText('Renderables: ' + G.aK.length, J * 0.6, 60);
            fillText('Killables: ' + G._F.length, J * 0.6, 80);
            fillText('Resolution: ' + G.aJ, J * 0.6, 100);

            restore();
        }

        restore();

        if(aB){
            aB();
        }
    };

    G.fv = function(e){
        // jz
        for(var i = G.ap.length ; --i >= 0 ;){
            G.ap[i]._a(e);
        }

        if(!G.Z && P._q){
            if((G.bi -= e) <= 0){
                G.bi = 0;
                G.Z = new cv(1);
                N(G.Z, '_I', 0, 1, 0.5);
            }

            if(G._z){
                // Not counting B cp time because it's skippable anyway
                G.bd += e;
            }
        }
    };

    G.bZ = function(id, t){
        var l = [function(){
            aB = fB;
        }];

        if(!G.Z && !_k){
            l.push(function(){
                aB = fC;
            });
        }

        if(isNaN(id)){
            Y(l)();
        }else{
            l[id]();
        }

        bj = t || F(0.1, 0.3);
        bk = G._z ? F(4, 8) : 99;
    };

    G.fD = function(){
        _r(function(){
            G.Z = new cv(0);
            N(G.Z, '_I', 0, 1, 0.5);
        }, 2000);
    };

    G.fF = function(){
        if(G._z == 13){
            G.Z = new cv(2);
            N(G.Z, '_I', 0, 1, 0.5);
        }else{
            G.bZ(0, 0.5);
            gA();
            _r(function(){
                G.c$();
                G.aq = 1;
                _r(ex, 500);
            }, 500);
        }
    };

    G.aP = function(){
        G.Z = new el();
    };

    G.iG = function(){
        G.Z = new iF();
    };

    G.gs = function(r){
        G.aJ = r;
        C.width = J  * r;
        C.height = _c * r;
    };

    G.add = function(e, K){
        if(K & 1){
            G.aK.push(e);
        }
        if(K & 2){
            G.ap.push(e);
        }
        if(K & 4){
            G._F.push(e);
        }
    };

    G._A = function(e){
        _A(G.ap, e);
        _A(G._F, e);
        _A(G.aK, e);
    };

    G.dJ = function(x, y, fs, bw){
        if(F() < fs){
            var bW = new (Y([gq, gp]))(x, y);
            if(--W.fw[bW.K] > 0){
                G.add(bW, 3);
                if(bw){
                    bW.bw();
                }
            }
        }
    };

    /*var displayablePixels = w.innerWidth * w.innerHeight * w.devicePixelRatio,
        gamePixels = J / _c,
        ratio = displayablePixels / gamePixels;
    if(ratio < 0.5){
        G.gs(ratio * 2);
    }*/

    G.c$(1);

    G.Z = new (aU ? gt : el)();
    if(!aU){
        _k = 0;
    }

    bj = 0;
    bk = 1;

    var ds = Date.now();
    (function(){
        var n = Date.now(),
            e = (n - ds) / 1000;

        if(true){
            G.ft = ~~(1 / e);
        }

        ds = n;

        G._a(e);

        (requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame)(arguments.callee);
    })();
}

var bh = {},
    _p = {};

function dr(e){
    P.S = 0;
    if(_p[37] || _p[65]){
        P.S = -1;
    }
    if(_p[39] || _p[68]){
        P.S = 1;
    }
    P.cl = _p[40] || _p[83];
}

onkeydown = function(e){
    if(!_p[38] && e.keyCode == 38 || !_p[87] && e.keyCode == 87){
        P.ae(1);
    }

    if(!_p[32] && e.keyCode == 32){
        P.dE();
    }

    if(true && e.keyCode === 68){
        P.ad();
    }

    _p[e.keyCode] = 1;
    dr(e);
};

onkeyup = function(e){
    if(e.keyCode == 32){
        P.dC();
    }

    _p[e.keyCode] = 0;
    dr(e);
};

onclick = function(e){
    var _R = C.getBoundingClientRect();
    if(G.Z){
        var x = J * (e.pageX - _R.left) / _R.width,
            y = _c * (e.pageY - _R.top) / _R.height;

        G.Z.click(x, y);
    }
};

var ak = function(e){
    e.preventDefault();

    P.S = 0;
    G.ak = 1;

    bh = {};

    var _R = C.getBoundingClientRect();
    for(var i = 0 ; i < e.touches.length ; i++){
        var x = J * (e.touches[i].pageX - _R.left) / _R.width,
            _ = ~~(x / (J / 4));

        if(!G.Z){
            if(!_){
                P.S = -1;
            }else if(_ == 1){
                P.S = 1;
            }else if(_ == 2){
                P.dE();
            }else if(_ == 3){
                P.ae(1);
            }

            bh[_] = 1;
        }
    }

    if(P.aC && !bh[2]){
        P.dC();
    }
};

addEventListener('touchstart', function(e){
    onclick(e.touches[0]);
});
addEventListener('touchstart', ak);
addEventListener('touchmove', ak);
addEventListener('touchend', ak);

onload = function(){
    C = D.querySelector('canvas');
    C.width = J;
    C.height = _c;

    R = C.getContext('2d');

    // Shortcut for all canvas methods
    var p = CanvasRenderingContext2D.prototype;
    Object.getOwnPropertyNames(p).forEach(function(n){
        if(R[n] && R[n].call){
            w[n] = p[n].bind(R);
        }
    });

    onresize();

    new fA();
};
