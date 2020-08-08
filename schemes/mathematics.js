schemes['mathematics'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['数学', '物理学', '计算机科学'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['柯西列', '可测集', '单星妖怪','度量空间','算子'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['L·克隆内克', '上帝创造了整数，所有其余的数都是人造的。'],
        ['诺瓦列斯','纯数学是魔术家真正的魔杖。'],
        ['高斯','数学中的一些美丽定理具有这样的特性:它们极易从事实中归纳出来，但证明却隐藏的极深。'],
        ['华罗庚','宇宙之大，粒子之微，火箭之速，化工之巧，地球之变，生物之谜，日用之繁，无处不用数学。'],
        ['怀特海','纯数学这门科学再其现代发展阶段，可以说是人类精神之最具独创性的创造。'],
        ['克莱因','数学是科学的皇后，而数论是数学的皇后高斯音乐能激发或抚慰情怀，绘画使人赏心悦目，诗歌能动人心弦，哲学使人获得智慧，科学可改善物质生活，但数学能给予以上的一切。'],
        ['希尔伯特','无限！再也没有其他问题如此深刻地打动过人类的心灵。'],
        ['雅可比','上帝是一位算术家。'],
        ['毕达哥拉斯','数统治着宇宙。'],
        ['I．Schur','非数学归纳法在数学的研究中，起着不可缺少的作用。']
        
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['构造', '直觉', '逻辑', '归纳'],
    //至少3个有关第一个学科的性质
    prop: ['无穷', '分析', '公理化'],
    //至少6个有关第一个学科的概念
    conc: ['ZFC集合论', '黎曼猜想', '霍奇猜想', '杨-米尔斯存在性与质量间隙', 'P?=NP', '芝诺悖论'],
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}
