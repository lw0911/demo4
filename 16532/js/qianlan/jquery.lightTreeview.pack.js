eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($){$.z={A:5(o,a){v(o,a,\'A\')},3:5(o,a){v(o,a,\'w\')},V:5(o,a){v(o,a,\'B\')}};5 v(o,s,a){4 f=$(o).j();4 b=f.n(\'>.0-r\');0(b,f,{u:W(s)?X:s},a)}$.Y.z=5(b){6(Z(b)==\'10\')b={};4 c=i();$.11(c,b);9.1(\'z\');6(!c.M)9.1(\'7-12\');6(c.C)9.1(\'7-\'+c.C);4 d=$(\'x:D(k,l)\',9);$(\'x:8-m\',9).1(\'13-8\');6(c.N){d.1(\'t-14\').p(\':8-m\').15(\'O\',\'t-8\');6(c.P)$(\'x:E(:D(k,l))>:F-m\',9).1(\'7-16\');6(c.Q)$(\'>:F-m\',d).1(\'7-q\');d.17(\'18\',\'19\').1a(\'<R O="0-r"></R>\').n(\'>k,>l\').p(\':y\').j().n(\'>.0-r\').1(\'0-3\');$(\'>.0-r\',d.p(\':8-m\')).1(\'0-G\');$(\'>k,>l\',d.p(\':8-m\')).p(\':y\').j().1(\'t-8-3\');d.n(\'>k,>l\').p(\':y\').j().n(\'>.7-q\').1(\'7-q-3\');6(c.S)d.n(\'>:1b-m(2)\').H(5(){$(9).j().n(\'>.0-r\').1c(\'H\')});$(\'>.0-r\',d).H(5(){4 f=$(9).j();6(c.T&&$(\'>k,>l\',f).1d(\':y\')){4 a=$(\'>x:D(k,l)\',f.j()).E(f);0($(\'>:F-m\',a),a,c,\'w\')}0($(9),f,c)})}};5 0(a,b,c,d){4 e=$(\'>k,>l\',b);4 f=a.p(\'.0-G\').j();4 g=a.E(\'.0-G\');4 h=$(\'>.7-q\',b);6(d==\'w\'){f.1(\'t-8-3\');g.1(\'0-3\');h.1(\'7-q-3\');e.w(c.u)}U 6(d==\'B\'){f.I(\'t-8-3\');g.I(\'0-3\');h.I(\'7-q-3\');e.B(c.u)}U{f.J(\'t-8-3\');g.J(\'0-3\');h.J(\'7-q-3\');e.A(c.u)}}4 i=5(){1e{N:K,M:K,u:1f,S:K,T:L,C:\'\',P:L,Q:L}}})(1g);',62,79,'flex|addClass||close|var|function|if|treeview|last|this||||||||||parent|ul|ol|child|find||filter|folder|ico||node|animate|exec|hide|li|hidden|lightTreeview|toggle|show|style|has|not|first|none|click|removeClass|toggleClass|true|false|line|collapse|class|fileico|folderico|span|nodeEvent|unique|else|open|isNaN|100|fn|typeof|undefined|extend|noline|branch|normal|attr|file|css|cursor|pointer|prepend|nth|trigger|is|return|200|jQuery'.split('|'),0,{}))

$(function() {	
	$('#demo3').lightTreeview({
		collapse: true,
		line: true,
		nodeEvent: true,
		unique: true,
		style: 'black',
		animate: 400
	});	
});
