package com.example.gramy;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.app.Dialog;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.gramy.Vo_Info.StockDetailVO;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class StockModifyActivity extends AppCompatActivity {
    EditText updateNameEdt,updateWeightEdt,updateShelfLifeEdt,updateOrderEdt;
    Button checkCancelBtn,checkModifyBtn,modifyWeightBtn;
    RequestQueue queue;
    int id;
    int stock_seq;
    String stock_name;
    int stock_weight;
    String stock_shelfLife;
    String stock_order;
    ImageButton selfLife;
    int Year,Month,Day;
    //Dialog
    static final int DATE_DIALOG_ID1 = 1;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_stock_modify);
        modifyWeightBtn=findViewById(R.id.modifyWeightBtn);
        updateNameEdt=findViewById(R.id.updateNameEdt);
        updateWeightEdt=findViewById(R.id.updateWeightEdt);
        updateShelfLifeEdt=findViewById(R.id.updateShelfLifeEdt);
        updateOrderEdt=findViewById(R.id.updateOrderEdt);
        checkCancelBtn=findViewById(R.id.checkCancelBtn);
        checkModifyBtn=findViewById(R.id.checkModifyBtn);
        selfLife=findViewById(R.id.selfLife);
        selfLife.bringToFront();

        //???????????? ?????????
        selfLife.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showDialog(DATE_DIALOG_ID1);
            }
        });
        //?????? ??????,?????? ????????????
        final Calendar c = Calendar.getInstance();
        Year = c.get(Calendar.YEAR);
        Month = c.get(Calendar.MONTH);
        Day = c.get(Calendar.DAY_OF_MONTH);
        //???????????? ??????
        updateDisplay();

        //????????????
        queue = Volley.newRequestQueue(StockModifyActivity.this);
        //???????????? ?????? ?????? ?????? ????????????
        Intent intent=getIntent();
        id=intent.getIntExtra("id",0);
        stock_seq=intent.getIntExtra("stock_seq",0);
        System.out.println(stock_seq);
        stock_name=intent.getStringExtra("stock_name");
        stock_weight=intent.getIntExtra("stock_weight",0);
        stock_shelfLife=intent.getStringExtra("stock_shelfLife");
        stock_order=intent.getStringExtra("stock_order");

        // ????????? ?????? ????????????
        updateNameEdt.setText(stock_name);
        updateWeightEdt.setText(String.valueOf(stock_weight));
        updateShelfLifeEdt.setText(stock_shelfLife);
        updateOrderEdt.setText(stock_order);

        checkModifyBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                System.out.println(stock_seq);
                stock_name=updateNameEdt.getText().toString();
                stock_weight=Integer.parseInt(updateWeightEdt.getText().toString());
                stock_shelfLife=updateShelfLifeEdt.getText().toString();
                stock_order=updateOrderEdt.getText().toString();

                updateStock(stock_seq,stock_name,stock_weight,stock_shelfLife,stock_order);
            }
        });
        modifyWeightBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.out.println(id);
                getWeight(id);
            }
        });

        checkCancelBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), HomeActivity.class);
                startActivity(intent);
                finish();
            }
        });



    }

    // ?????????????????????
    private void updateStock(int stock_seq,String stock_name,int stock_weight, String stock_shelfLife,String stock_order) {
        int method = Request.Method.POST;
        String server_url = "http://172.30.1.52:8082/product/updatestock";
        StringRequest request = new StringRequest(method, server_url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                if (response.equals("success")) {
                    Toast.makeText(getApplicationContext(), "??????????????? ???????????? ???????????????!", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(getApplicationContext(), HomeActivity.class);
                    startActivity(intent);
                    finish();
                }

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(StockModifyActivity.this, "??????????????? ??????????????????", Toast.LENGTH_SHORT).show();

            }
        }){
            @Nullable
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                // ?????? ?????????
                Map<String, String> param = new HashMap<>();
                param.put("stock_seq", String.valueOf(stock_seq));
                param.put("stock_name", stock_name);
                param.put("stock_weight",String.valueOf(stock_weight));
                param.put("stock_shelfLife",stock_shelfLife);
                param.put("stock_order",stock_order);
                return param;
            }
        };

        queue.add(request);
    }

    // ?????? ???????????? ?????????
    private void getWeight(int id){
        int method = Request.Method.GET;
        String server_url = "http://172.30.1.44:8083/getweight/"+id;// ???????????? url
        StringRequest request = new StringRequest(method, server_url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                String setWeight=response;
                updateWeightEdt.setText(setWeight);

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {

            }
        });

        queue.add(request);
    }

    //???????????? ??????
    private void updateDisplay(){
        updateShelfLifeEdt.setText(String.format("%d??? %d??? %d???", Year, Month+1, Day));
    }

    //DatePicker ?????????
    private DatePickerDialog.OnDateSetListener mDateSetListener1 =
            new DatePickerDialog.OnDateSetListener() {
                @Override
                public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                    Year = year;
                    Month = monthOfYear;
                    Day = dayOfMonth;
                    updateDisplay();
                }
            };

    @Override
    protected Dialog onCreateDialog(int id) {
        switch (id) {
            case DATE_DIALOG_ID1 :
                return new DatePickerDialog(this, mDateSetListener1, Year, Month, Day);
        }

        return null;
    }
}