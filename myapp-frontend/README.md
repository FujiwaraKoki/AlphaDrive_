# 実行環境

1.本プロジェクトをローカルにインポートしていること  
2.下記モジュールをインストールすること  
  (インストール済みか否かについては「npm list」コマンド、「pip list」コマンドにより確認可能)  

- npm install react-calendar-timeline
- npm install axios
- npm install -g create-react-app (必要に応じてインストールすること)  

- python -m pip install django  

3.DBの環境構築が完了しており、テーブル(計5つ)が生成されていること  
  また、下記テストデータが所定テーブルにインポートされていること  
  - custom_user.csv
  - employee_shift.csv
  - group_company.csv
  - max_office_hour.csv
  - shift_type.csv

# 実行手順

1.VSCodeを起動し、ターミナルを2つ起動させる  
2.各ターミナルを下記の通り設定し、コマンドを実行する  
　・パス: (ProjectFolder)/                  実行コマンド: python manage.py runserver  
  ・パス: (ProjectFolder)/myapp-frontend    実行コマンド: npm start  
3.ブラウザが立ち上がり、「localhost:3000」で自動的にアクセスされる  