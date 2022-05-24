select * from tb_user;
delete from tb_user;
select * from TB_PURCHASE;
select * from TB_STOCK;

DROP TABLE tb_user CASCADE CONSTRAINTS;

select a.sid, a.serial# 
from v$session a, v$lock b, dba_objects c 
where a.sid=b.sid and 
b.id1=c.object_id and 
b.type='TM' and 
c.object_name='tb_p_reply';

alter session set ddl_lock_timeout = 600;
DROP TABLE tb_purchase CASCADE CONSTRAINTS;
DROP TABLE tb_p_reply CASCADE CONSTRAINTS;
DROP TABLE tb_report CASCADE CONSTRAINTS;
DROP TABLE tb_shelf CASCADE CONSTRAINTS;
DROP TABLE tb_stock CASCADE CONSTRAINTS;
DROP TABLE tb_stock_weight CASCADE CONSTRAINTS;
DROP TABLE tb_reply CASCADE CONSTRAINTS;

drop trigger TB_USER_AI_TRG;

select * from tb_pruchase a full outer join tb_report b on a.user_id= b.user_id;

insert into tb_p_reply(pr_seq,purchase_seq,pr_content,pr_date,user_id,user_name) values(tb_p_reply_SEQ.nextval,60,1,sysdate,1,1)
insert into tb_p_reply(pr_seq,purchase_seq,pr_content,pr_date,user_id,user_name) values(tb_p_reply_SEQ.nextval,60,2,sysdate,2,2)



-- tb_user Table Create SQL
CREATE TABLE tb_user
(
    user_seq         NUMBER(12, 0)    NOT NULL, 
    user_id          VARCHAR2(30)     unique, 
    user_pw          VARCHAR2(100)     NOT NULL, 
    user_phone       VARCHAR2(30)     NOT NULL, 
    user_addr        VARCHAR2(200)    NOT NULL, 
    user_role        VARCHAR2(30)     NOT NULL, 
    user_joindate    DATE             NOT NULL, 
    user_name        VARCHAR2(30)     NOT NULL, 
    user_gender      VARCHAR2(30)     NOT NULL, 
     PRIMARY KEY (user_seq)
)
/

CREATE SEQUENCE tb_user_SEQ
START WITH 1
INCREMENT BY 1;
/
delete from tb_user;
alter table tb_user add constraint user_id_unique unique user_id;

CREATE OR REPLACE TRIGGER tb_user_AI_TRG
BEFORE INSERT ON tb_user 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_user_SEQ.NEXTVAL
    INTO :NEW.user_seq
    FROM DUAL;
END;
/


CREATE TABLE tb_shelf
(
    shelf_seq     NUMBER(12, 0)    NOT NULL, 
    shelf_name    VARCHAR2(30)     NOT NULL, 
    user_id       VARCHAR2(30)     NOT NULL, 
     PRIMARY KEY (shelf_seq)
)
/

CREATE SEQUENCE tb_shelf_SEQ
START WITH 1
INCREMENT BY 1;
/

insert into tb_shelf values (tb_shelf_SEQ.nextval,'1','1@1');
insert into tb_shelf values (tb_shelf_SEQ.nextval,'2','2@2');
insert into tb_shelf values (tb_shelf_SEQ.nextval,'3','3@3');
select * from tb_shelf;

CREATE OR REPLACE TRIGGER tb_shelf_AI_TRG
BEFORE INSERT ON tb_shelf 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_shelf_SEQ.NEXTVAL
    INTO :NEW.shelf_seq
    FROM DUAL;
END;
/

--DROP TRIGGER tb_shelf_AI_TRG;
/

--DROP SEQUENCE tb_shelf_SEQ;

ALTER TABLE tb_shelf
    ADD CONSTRAINT FK_tb_shelf_user_id_tb_user_us FOREIGN KEY (user_id)
        REFERENCES tb_user (user_id)
/


-- tb_stock Table Create SQL
CREATE TABLE tb_stock
(
    stock_seq       NUMBER(12, 0)    NOT NULL,  
    stock_name      VARCHAR2(30)     NOT NULL, 
    stock_weight    NUMBER(12, 1)    NOT NULL, 
    stock_date      DATE             NOT NULL, 
    stock_shelfLife VARCHAR2(30)     NOT NULL,
    shelf_seq       NUMBER(12, 0)    NOT NULL, 
    stock_order     VARCHAR2(30)     NOT NULL, 
     PRIMARY KEY (stock_seq)
)
/

CREATE SEQUENCE tb_stock_SEQ
START WITH 1
INCREMENT BY 1;
/

CREATE OR REPLACE TRIGGER tb_stock_AI_TRG
BEFORE INSERT ON tb_stock 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_stock_SEQ.NEXTVAL
    INTO :NEW.stock_seq
    FROM DUAL;
END;

ALTER TABLE tb_stock drop CONSTRAINT FK_tb_stock_shelf_seq_tb_shelf;

ALTER TABLE tb_stock
    ADD CONSTRAINT FK_tb_stock_shelf_seq_tb_shelf FOREIGN KEY (shelf_seq)
        REFERENCES tb_shelf (shelf_seq) ON DELETE CASCADE;
/


-- tb_purchase Table Create SQL
CREATE TABLE tb_purchase
(
    purchase_seq        NUMBER(12, 0)      NOT NULL, 
    purchase_title      VARCHAR2(200)      NOT NULL, 
    purchase_content    VARCHAR2(4000)    NOT NULL, 
    purchase_date       DATE               NOT NULL, 
    purchase_cnt        NUMBER(12, 0)      NOT NULL, 
    user_id             VARCHAR2(30)       NOT NULL, 
    user_name           VARCHAR2(30)       NOT NULL, 
     PRIMARY KEY (purchase_seq)
)
/

CREATE SEQUENCE tb_purchase_SEQ
START WITH 1
INCREMENT BY 1;
/

CREATE OR REPLACE TRIGGER tb_purchase_AI_TRG
BEFORE INSERT ON tb_purchase 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_purchase_SEQ.NEXTVAL
    INTO :NEW.purchase_seq
    FROM DUAL;
END;
/



ALTER TABLE tb_purchase
    ADD CONSTRAINT FK_tb_purchase_user_id_tb_user FOREIGN KEY (user_id)
        REFERENCES tb_user (user_id)
/


-- tb_report Table Create SQL
CREATE TABLE tb_report
(
    report_seq        NUMBER(12, 0)      NOT NULL, 
    report_title      VARCHAR2(200)      NOT NULL, 
    report_content    VARCHAR2(4000)    NOT NULL, 
    report_date       DATE               NOT NULL, 
    report_status     CHAR(1)            NOT NULL, 
    user_id           VARCHAR2(30)       NOT NULL, 
    report_cnt        NUMBER(12, 0)      NOT NULL, 
    user_name         VARCHAR2(30)       NOT NULL, 
     PRIMARY KEY (report_seq)
)
/

CREATE SEQUENCE tb_report_SEQ
START WITH 1
INCREMENT BY 1;
/

CREATE OR REPLACE TRIGGER tb_report_AI_TRG
BEFORE INSERT ON tb_report 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_report_SEQ.NEXTVAL
    INTO :NEW.report_seq
    FROM DUAL;
END;
/



ALTER TABLE tb_report
    ADD CONSTRAINT FK_tb_report_user_id_tb_user_u FOREIGN KEY (user_id)
        REFERENCES tb_user (user_id)
/


-- tb_reply Table Create SQL
CREATE TABLE tb_reply
(
    reply_seq        NUMBER(12, 0)     NOT NULL, 
    report_seq       NUMBER(12, 0)     NOT NULL, 
    reply_content    VARCHAR2(4000)    NOT NULL, 
    reply_date       DATE              NOT NULL, 
    user_id          VARCHAR2(30)      NOT NULL, 
    user_name        VARCHAR2(30)      NOT NULL, 
     PRIMARY KEY (reply_seq)
)
/

CREATE SEQUENCE tb_reply_SEQ
START WITH 1
INCREMENT BY 1;
/

CREATE OR REPLACE TRIGGER tb_reply_AI_TRG
BEFORE INSERT ON tb_reply 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_reply_SEQ.NEXTVAL
    INTO :NEW.reply_seq
    FROM DUAL;
END;
/

ALTER TABLE tb_reply drop CONSTRAINT FK_tb_reply_report_seq_tb_repo;

ALTER TABLE tb_reply
    ADD CONSTRAINT FK_tb_reply_report_seq_tb_repo FOREIGN KEY (report_seq)
        REFERENCES tb_report (report_seq) ON DELETE CASCADE;
/

ALTER TABLE tb_reply
    ADD CONSTRAINT FK_tb_reply_user_id_tb_user_us FOREIGN KEY (user_id)
        REFERENCES tb_user (user_id)
/


-- tb_p_reply Table Create SQL
CREATE TABLE tb_p_reply
(
    pr_seq          NUMBER(12, 0)     NOT NULL, 
    purchase_seq    NUMBER(12, 0)     NOT NULL, 
    pr_content      VARCHAR2(4000)    NOT NULL, 
    pr_date         DATE              NOT NULL, 
    user_id         VARCHAR2(30)      NOT NULL, 
    user_name       VARCHAR2(30)      NOT NULL, 
     PRIMARY KEY (pr_seq)
)
/

CREATE SEQUENCE tb_p_reply_SEQ
START WITH 1
INCREMENT BY 1;
/

CREATE OR REPLACE TRIGGER tb_p_reply_AI_TRG
BEFORE INSERT ON tb_p_reply 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_p_reply_SEQ.NEXTVAL
    INTO :NEW.pr_seq
    FROM DUAL;
END;
/

ALTER TABLE tb_p_reply drop CONSTRAINT FK_tb_p_reply_purchase_seq_tb;

ALTER TABLE tb_p_reply
    ADD CONSTRAINT FK_tb_p_reply_purchase_seq_tb_ FOREIGN KEY (purchase_seq)
        REFERENCES tb_purchase (purchase_seq) ON DELETE CASCADE;
/

ALTER TABLE tb_p_reply
    ADD CONSTRAINT FK_tb_p_reply_user_id_tb_user_ FOREIGN KEY (user_id)
        REFERENCES tb_user (user_id)
/


-- tb_stock_weight Table Create SQL
CREATE TABLE tb_stock_weight
(
    weight_seq      NUMBER(12, 0)     NOT NULL, 
    stock_seq       NUMBER(12, 0)     NOT NULL, 
    weight_value    NUMBER(12, 1)     NOT NULL, 
    weight_date     DATE              NOT NULL, 
    weight_memo     VARCHAR2(4000)    NULL, 
     PRIMARY KEY (weight_seq)
)
/

CREATE SEQUENCE tb_stock_weight_SEQ
START WITH 1
INCREMENT BY 1;
/

CREATE OR REPLACE TRIGGER tb_stock_weight_AI_TRG
BEFORE INSERT ON tb_stock_weight 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT tb_stock_weight_SEQ.NEXTVAL
    INTO :NEW.weight_seq
    FROM DUAL;
END;
/

alter table tb_stock_weight drop constraint FK_tb_stock_weight_stock_seq_t; 

ALTER TABLE tb_stock_weight
    ADD CONSTRAINT FK_tb_stock_weight_stock_seq_t FOREIGN KEY (stock_seq)
        REFERENCES tb_stock (stock_seq) ON DELETE CASCADE;
/


CREATE TABLE tb_app_board
(
    tb_a_seq        NUMBER(12, 0)     NOT NULL, 
    tb_a_title      VARCHAR2(200)     NOT NULL, 
    tb_a_content    VARCHAR2(4000)    NOT NULL, 
    tb_a_date       DATE              NOT NULL, 
    user_id         VARCHAR2(30)      NOT NULL, 
    user_name       VARCHAR2(30)      NOT NULL, 
     PRIMARY KEY (tb_a_seq)
)
/

CREATE SEQUENCE tb_app_board_SEQ
START WITH 1
INCREMENT BY 1;

INSERT INTO tb_app_board (tb_a_seq,tb_a_title, tb_a_content, tb_a_date, user_id, user_name) VALUES (tb_app_board_SEQ.nextval,'tb_a_title 1', 'tb_a_content 1', sysdate, 'user_id 1', 'user_name 1');
INSERT INTO tb_app_board (tb_a_seq,tb_a_title, tb_a_content, tb_a_date, user_id, user_name) VALUES (tb_app_board_SEQ.nextval,'tb_a_title 2', 'tb_a_content 2', sysdate, 'user_id 2', 'user_name 2');
INSERT INTO tb_app_board (tb_a_seq,tb_a_title, tb_a_content, tb_a_date, user_id, user_name) VALUES (tb_app_board_SEQ.nextval,'tb_a_title 3', 'tb_a_content 3', sysdate, 'user_id 3', 'user_name 3');
INSERT INTO tb_app_board (tb_a_seq,tb_a_title, tb_a_content, tb_a_date, user_id, user_name) VALUES (tb_app_board_SEQ.nextval,'tb_a_title 4', 'tb_a_content 4', sysdate, 'user_id 4', 'user_name 4');
INSERT INTO tb_app_board (tb_a_seq,tb_a_title, tb_a_content, tb_a_date, user_id, user_name) VALUES (tb_app_board_SEQ.nextval,'tb_a_title 5', 'tb_a_content 5', sysdate, 'user_id 5', 'user_name 5');

CREATE TABLE tb_a_reply
(
    ar_seq        NUMBER(12, 0)    NOT NULL, 
    tb_a_seq      NUMBER(12, 0)    NOT NULL, 
    ar_content    VARCHAR2(4000)     NOT NULL, 
    user_id       VARCHAR2(30)     NOT NULL, 
    user_name     VARCHAR2(200)    NOT NULL, 
    ar_date       DATE             NOT NULL, 
     PRIMARY KEY (ar_seq)
)
/

CREATE SEQUENCE tb_a_reply_SEQ
START WITH 1
INCREMENT BY 1;
alter table tb_a_reply drop constraint FK_tb_app_board_seq_tb_a;

ALTER TABLE tb_a_reply
    ADD CONSTRAINT FK_tb_app_board_seq_tb_a FOREIGN KEY (tb_a_seq)
        REFERENCES tb_app_board (tb_a_seq) ON DELETE CASCADE;


INSERT INTO tb_a_reply (ar_seq, tb_a_seq, ar_content, user_id, user_name, ar_date) VALUES (tb_a_reply_SEQ.nextval,21, 'ar_content 1', 'user_id 1', 'user_name 1', sysdate);
INSERT INTO tb_a_reply (ar_seq, tb_a_seq, ar_content, user_id, user_name, ar_date) VALUES (tb_a_reply_SEQ.nextval,21, 'ar_content 2', 'user_id 2', 'user_name 2', sysdate);
INSERT INTO tb_a_reply (ar_seq, tb_a_seq, ar_content, user_id, user_name, ar_date) VALUES (tb_a_reply_SEQ.nextval,21, 'ar_content 3', 'user_id 3', 'user_name 3', sysdate);
INSERT INTO tb_a_reply (ar_seq, tb_a_seq, ar_content, user_id, user_name, ar_date) VALUES (tb_a_reply_SEQ.nextval,21, 'ar_content 4', 'user_id 4', 'user_name 4', sysdate);
INSERT INTO tb_a_reply (ar_seq, tb_a_seq, ar_content, user_id, user_name, ar_date) VALUES (tb_a_reply_SEQ.nextval,21, 'ar_content 5', 'user_id 5', 'user_name 5', sysdate);
